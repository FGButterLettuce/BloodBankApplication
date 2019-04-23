import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { AlertController,Events } from '@ionic/angular';
import { AmplifyService } from 'aws-amplify-angular'


import Amplify from 'aws-amplify';
import amplify from 'src/aws-exports.js';
Amplify.configure(amplify);


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

export class SignUpPage implements OnInit {

  emiratesId: Number;
  name: string;
  email: string;
  password1: string;
  password2: string;
  alive: boolean = false;
  code: string;


  amplifyService: AmplifyService;

  user:any;


  constructor(private events: Events, private amplify: AmplifyService,private router: Router, public alertController: AlertController) { 
  this.amplifyService = amplify
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
      forceAliasCreation: true
    }).then(data => {
        if(data){
          // this.adduser();
          this.login()
        }
    })
      .catch(err => console.log(err));
  }

  login() {
    this.router.navigate(['log-in']);
  }
  
  adduser(){

    let usr = [{
      eid: this.emiratesId,
      name: this.name,
      email: this.email,
    }]
    this.amplifyService.api().post('donorapi', '/donor-ionic', {body: usr})
    .catch((err) => {
      console.log(`Error saving list: ${err}`)
    })
  }
}
