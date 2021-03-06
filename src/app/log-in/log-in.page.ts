import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../services/session/session.service';
import { AmplifyService } from 'aws-amplify-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { FcmService } from '../services/fcm/fcm.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  emiratesId: string;
  password: string;
  collection;

  loading = false;
  constructor(public amplify: AmplifyService, public session: SessionService, private router: Router, public alertController: AlertController, public afs: AngularFirestore
    , public fcm: FcmService) {
    this.collection = this.afs.collection('users');
  }

  ngOnInit() {
  }


  async presentAlert(data) {
    let alert = await this.alertController.create({
      header: 'Error',
      message: data,
      buttons: ['OK']
    });
    alert.present();
  }

  async login() {
    this.loading = true;
    if (this.password == null)
      this.presentAlert("Please Enter Password");
    try {
      const user = await this.amplify.auth().signIn(this.emiratesId.toString(), this.password)
      this.session.user = user;
      await this.session.getPoints(this.emiratesId.toString());
      this.session.eid = this.emiratesId.toString();
      this.session.getEvents();
      this.session.checkRecords(this.emiratesId.toString());
      this.session.getDonations(this.emiratesId.toString());
      this.session.getHospitals();
      this.loading = false;
      this.addtoFB();
      this.router.navigate(['user-home']);
    }
    catch (err) {
      if (err.code === 'UserNotConfirmedException') {

        this.presentAlert(err);
        // The error happens if the user didn't finish the confirmation step when signing up
        // In this case you need to resend the code and confirm the user
        // About how to resend the code and confirm the user, please check the signUp part
      } else if (err.code === 'PasswordResetRequiredException') {
        this.presentAlert("Reset Your Password");

        // The error happens when the password is reset in the Cognito console
        // In this case you need to call forgotPassword to reset the password
        // Please check the Forgot Password part.
      } else if (err.code === 'NotAuthorizedException') {
        this.presentAlert("Incorrect Password");

        // The error happens when the incorrect password is provided
      } else if (err.code === 'UserNotFoundException') {
        this.presentAlert("User not Found");

        // The error happens when the supplied username/email does not exist in the Cognito user pool
      } else {
        console.log(err);
      }

    }
  }

  signup() {
    this.router.navigate(['sign-up']);
  }
  addtoFB() {
    setTimeout(() => {
      var uid = this.session.user.attributes.sub
      if (this.session.recordexists.val) {
        var sendrec = {
          cogid: uid,
          eid: this.emiratesId.toString(),
          bloodgroup: this.session.recordexists.bloodgroup,
          token: this.fcm.msgtoken
        }
        this.collection.doc(`${this.emiratesId.toString()}`).set(sendrec);
      }
      else if (this.session.donationexists.val) {
        var senddon = {
          cogid: uid,
          eid: this.emiratesId.toString(),
          bloodgroup: this.session.donationexists.bloodgroup,
          token: this.fcm.msgtoken
        }

        this.collection.doc(`${this.emiratesId.toString()}`).set(senddon);
      }
    }, 3000)
  }
}
