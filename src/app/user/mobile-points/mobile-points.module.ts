import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MobilePointsPage } from './mobile-points.page';

import { CountUpModule } from 'countup.js-angular2';

const routes: Routes = [
  {
    path: '',
    component: MobilePointsPage
  }
];

@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    CountUpModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MobilePointsPage]
})
export class MobilePointsPageModule {}
