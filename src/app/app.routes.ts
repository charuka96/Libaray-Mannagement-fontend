import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './commen/login/login.component';
import { BookComponent } from './commen/book/book.component';

export const routes: Routes = [

  {
  path: '',
  component:LoginComponent
  }
  ,{
  path:'book',
  component:BookComponent
  }




];
