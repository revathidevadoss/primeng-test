import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './../auth/auth.service';

@Component({
selector: 'progress-spinner-overview-example',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  focus;
  focus1;
  alertMsg="";
  alertmsgflag;
  errmsg;
  constructor(
        private authService: AuthService,
        private router: Router) { }

  ngOnInit() {
  }

  onClickSubmit(data:any) {
    this.authService.login(data);
    console.log(data.userName +" "+data.password);
       if(data.userName == "admin" && data.password == "Test123"){
         this.router.navigate(['/home']);
       }else{
          this.alertmsgflag=true;
          this.errmsg="Invalid Login credentials";
       }
  }
}
