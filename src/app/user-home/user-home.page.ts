import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../services/session/session.service';
import { AmplifyService } from 'aws-amplify-angular';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {
  name: string;
  pointsum;
  constructor(private session: SessionService, private acr: ActivatedRoute, private router: Router, private amplifyService: AmplifyService, private events: Events) {
    this.name = this.session.user.attributes.name;
    // console.log(this.session.user.attributes)
    this.pointsum = this.session.pointsum;
  }

  ngOnInit() {
  }

  calendar(){
    this.router.navigate(['view-calendar']);

  }
  points() {
    this.router.navigate(['points']);
  }

  schedule() {

    this.router.navigate(['schedule']);

  }

  async logout() {
    this.session.clearall()
    await this.amplifyService.auth().signOut()
      .catch(err => console.log(err));
    this.router.navigate(['home']);
  }
}
