import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
// import { AmplifyAngularModule, AmplifyIonicModule, AmplifyService } from 'aws-amplify-angular' // Added by me
import { IonicModule } from '@ionic/angular';

import { SignUpPage } from './sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // AmplifyAngularModule, // Added by me
    // AmplifyIonicModule, 
    RouterModule.forChild(routes)
  ],
  declarations: [SignUpPage]
})
export class SignUpPageModule {}
