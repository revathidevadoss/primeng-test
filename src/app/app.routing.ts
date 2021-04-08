import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { SalesComponent } from './sales/sales.component';


const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'product',          component: ProductComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'sales',          component: SalesComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
