import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular'

import { AlertController } from '@ionic/angular';

import Amplify from 'aws-amplify';
import amplify from 'src/aws-exports.js';
Amplify.configure(amplify);

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

  constructor(private amplifyService: AmplifyService,private router: Router, public alertController: AlertController) { }

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

    else {
      Auth.signUp({
        username: this.emiratesId.toString(),
        password: this.password2,
        attributes: {
          email: this.email,
          name: this.name
        },
      })
        .then(data => console.log(data))
        .catch(err => console.log(err, this.presentAlert(err)));
      console.log(this.emiratesId);
      this.alive=!this.alive;
    }
  }

  confirmation() {
    Auth.confirmSignUp(this.emiratesId.toString(), this.code, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true
    }).then(data => {
        if(data){
          this.adduser();
          this.login()
        }
    })
      .catch(err => console.log(err));
  }

  login(){
    this.router.navigate(['mobile-log-in']);
  }


  adduser(){
    let usr = [{
      eid: this.emiratesId,
      name: this.name,
      email: this.email
    }]
    this.amplifyService.api().post('donorapi', '/donor', {body: usr})
    .catch((err) => {
      console.log(`Error saving list: ${err}`)
    })
  }
}
