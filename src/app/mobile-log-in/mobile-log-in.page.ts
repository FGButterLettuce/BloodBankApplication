import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../services/session/session.service';
import { AmplifyService } from 'aws-amplify-angular';



// import Amplify from 'aws-amplify';
// import amplify from 'src/aws-exports.js';
// Amplify.configure(amplify);


@Component({
  selector: 'app-mobile-log-in',
  templateUrl: './mobile-log-in.page.html',
  styleUrls: ['./mobile-log-in.page.scss'],
})
export class MobileLogInPage implements OnInit {

  emiratesId: string;
  password: string;

  constructor(public amplify:AmplifyService, public session: SessionService,private router: Router, public alertController: AlertController) { }

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
      const user = await this.amplify.auth().signIn(this.emiratesId.toString(), this.password)
      this.session.user = user;
      await this.session.getPoints(this.emiratesId.toString());
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
