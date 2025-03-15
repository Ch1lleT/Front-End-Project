import { Routes } from '@angular/router';

import { Detail01Component } from './detail-01/detail-01.component';
import { Detail02Component } from './detail-02/detail-02.component';
import { Detail03Component } from './detail-03/detail-03.component';
import { Detail04Component } from './detail-04/detail-04.component';
import { Detail05Component } from './detail-05/detail-05.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: 'detail01', component: Detail01Component },
  { path: 'detail02', component: Detail02Component },
  { path: 'detail03', component: Detail03Component },
  { path: 'detail04', component: Detail04Component },
  { path: 'detail05', component: Detail05Component },
  { path: 'home', component: HomeComponent },
];
