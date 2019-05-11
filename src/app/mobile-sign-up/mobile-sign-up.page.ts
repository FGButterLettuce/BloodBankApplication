import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mobile-sign-up',
  templateUrl: './mobile-sign-up.page.html',
  styleUrls: ['./mobile-sign-up.page.scss'],
})
export class MobileSignUpPage implements OnInit {

  emiratesId: Number;
  name: string;
  email: string;
  password1: string;
  password2: string;
  alive: boolean = false;
  code: string;

  constructor(private amplify: AmplifyService, private router: Router, public alertController: AlertController) {  }

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


  signup() {

    if (this.password1 != this.password2) {
      this.presentAlert('Passwords dont match!');
    }
    if (this.password1.length < 8 || this.password2.length < 8) {
      this.presentAlert('Password not 8 characters long!');
    }


    else {
      this.amplify.auth().signUp({
        username: this.emiratesId.toString(),
        password: this.password2,
        attributes: {
          email: this.email,
          name: this.name
        },
      })
        .then(data =>
          this.alive = !this.alive)
        .catch(err => console.log(err, this.presentAlert(err)));
      console.log(this.emiratesId);
    }
  }

  confirmation() {
    this.amplify.auth().confirmSignUp(this.emiratesId.toString(), this.code, {
      forceAliasCreation: true
    }).then(data => {
      if (data) {
        this.alive = !this.alive;
        this.addusertoDB();
        this.login()
      }
    })
      .catch(err => console.log(err));
  }

  login() {
    this.router.navigate(['log-in']);
  }

  async addusertoDB() {

    let myInit = {
      body: {
        eid: this.emiratesId.toString(),
        email: this.email,
        name: this.name
      }
    }
    const path = '/donor';
    await this.amplify.api().post('donor', path, myInit)
  }
}