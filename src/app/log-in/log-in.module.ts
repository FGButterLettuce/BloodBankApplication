import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AmplifyAngularModule, AmplifyIonicModule, AmplifyService } from 'aws-amplify-angular' // Added by me
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';




import { LogInPage } from './log-in.page';

const routes: Routes = [
  {
    path: '',
    component: LogInPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AmplifyAngularModule,
    AmplifyIonicModule, 
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LogInPage]
})
export class LogInPageModule {}
