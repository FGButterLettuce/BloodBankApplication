import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MobileUserHomePage } from './mobile-user-home.page';

const routes: Routes = [
  {
    path: '',
    component: MobileUserHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MobileUserHomePage]
})
export class MobileUserHomePageModule {}
