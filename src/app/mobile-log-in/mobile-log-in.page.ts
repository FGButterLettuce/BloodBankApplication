import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth } from 'aws-amplify';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../services/session/session.service';

import Amplify from 'aws-amplify';
import amplify from 'src/aws-exports.js';
Amplify.configure(amplify);


@Component({
  selector: 'app-mobile-log-in',
  templateUrl: './mobile-log-in.page.html',
  styleUrls: ['./mobile-log-in.page.scss'],
})
export class MobileLogInPage implements OnInit {

  emiratesId: string;
  password: string;

  constructor(public session: SessionService,private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentError(data) {
    let alert = await this.alertController.create({
      header: 'Error',
      message: data,
      buttons: ['OK']
    });
    alert.present();
  }

  async presentAlert(data) {
    let alert = await this.alertController.create({
      header: 'Warning',
      message: data,
      buttons: ['OK']
    });
    alert.present();
  }


  async login() {
    
    if(this.password == null)
      this.presentAlert("Please Enter Password");
      
    try {
      const user = await Auth.signIn(this.emiratesId.toString(), this.password)
      //session add user
      // console.log(user.attributes.name);
      // console.log(JSON.stringify(user));
      this.session.user = user;
      this.router.navigate(['mobile-user-home']);
    }
    catch (err) {
      if (err.code === 'UserNotConfirmedException') {

        this.presentError(err);
        // The error happens if the user didn't finish the confirmation step when signing up
        // In this case you need to resend the code and confirm the user
        // About how to resend the code and confirm the user, please check the signUp part
      } else if (err.code === 'PasswordResetRequiredException') {
        this.presentError("Reset Your Password");

        // The error happens when the password is reset in the Cognito console
        // In this case you need to call forgotPassword to reset the password
        // Please check the Forgot Password part.
      } else if (err.code === 'NotAuthorizedException') {
        this.presentError("Incorrect Password");

        // The error happens when the incorrect password is provided
      } else if (err.code === 'UserNotFoundException') {
        this.presentError("User not Found");

        // The error happens when the supplied username/email does not exist in the Cognito user pool
      } else {
        console.log(err);
      }

    }
  }

  signup(){
    this.router.navigate(['mobile-sign-up']);
  }


}
