import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { AuthService } from '../../auth/auth.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isLoggedIn$: Observable<boolean>;
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    constructor(
        private authService: AuthService,
              public location: Location, 
              private router: Router) {
    }

    ngOnInit() {
        this.isLoggedIn$ = this.authService.isLoggedIn;
        this.router.events.subscribe((event) => {
          this.isCollapsed = true;
          if (event instanceof NavigationStart) {
            if (event.url != this.lastPoppedUrl)
                this.yScrollStack.push(window.scrollY);
         } else if (event instanceof NavigationEnd) {
            if (event.url == this.lastPoppedUrl) {
                this.lastPoppedUrl = undefined;
                window.scrollTo(0, this.yScrollStack.pop());
            } else
                window.scrollTo(0, 0);
         }
       });
       this.location.subscribe((ev:PopStateEvent) => {
           this.lastPoppedUrl = ev.url;
       });
    }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    product(){
        this.router.navigate(['/product']);
    }
}
