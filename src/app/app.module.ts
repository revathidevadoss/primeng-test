import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { NgxUiLoaderModule } from 'ngx-ui-loader';


import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SalesComponent } from './sales/sales.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';

import { SaleService } from './SaleService';
import { pojoService } from './pojoService';

import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService, MessageService } from "primeng/api";
import {FilterService} from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SalesComponent
    
  ],
 
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    ButtonModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    MessagesModule,
    DialogModule
    
  ],
  providers: [ AuthService, AuthGuard,SaleService,pojoService,ConfirmationService,MessageService,FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
