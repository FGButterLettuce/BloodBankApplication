import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MobileViewCalendarPage } from './mobile-view-calendar.page';

import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!


const routes: Routes = [
  {
    path: '',
    component: MobileViewCalendarPage
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
  declarations: [MobileViewCalendarPage]
})
export class MobileViewCalendarPageModule {}
