import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserHomePage } from './user-home.page';
import { CountUpModule } from 'countup.js-angular2';


const routes: Routes = [
  {
    path: '',
    component: UserHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountUpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserHomePage]
})
export class UserHomePageModule {}
