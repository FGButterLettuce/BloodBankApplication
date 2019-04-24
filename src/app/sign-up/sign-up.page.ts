import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, API } from 'aws-amplify';
import { AlertController } from '@ionic/angular';
import { AmplifyService } from 'aws-amplify-angular'



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
        this.adduser();
        this.login()
      }
    })
      .catch(err => console.log(err));
  }

  login() {
    this.router.navigate(['log-in']);
  }

  async adduser() {

    let myInit = {
      body: {
        eid: this.emiratesId.toString(),
        email: this.email,
        name: this.name
      }
    }
    const path = '/donor';
    this.amplify.api().post('donor', path, myInit)
  }
}
