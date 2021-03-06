import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MobileSchedulePage } from './mobile-schedule.page';

import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!


const routes: Routes = [
  {
    path: '',
    component: MobileSchedulePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MobileSchedulePage]
})
export class MobileSchedulePageModule {}
