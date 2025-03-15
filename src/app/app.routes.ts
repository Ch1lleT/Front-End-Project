import { Routes } from '@angular/router';
import { Test01Component } from './test01/test01.component';
import { Test02Component } from './test02/test02.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'test01', component: Test01Component },
  { path: 'test02', component: Test02Component },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'test01' },
];
