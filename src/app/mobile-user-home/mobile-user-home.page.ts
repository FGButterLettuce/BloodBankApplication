import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session/session.service';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-mobile-user-home',
  templateUrl: './mobile-user-home.page.html',
  styleUrls: ['./mobile-user-home.page.scss'],
})
export class MobileUserHomePage implements OnInit {
  name: string;
  pointsum;
  constructor(public session: SessionService, private router: Router, public amplifyService: AmplifyService) {
    this.name = this.session.user.attributes.name;
    this.pointsum = this.session.pointsum;
  }
  ngOnInit() {
  }
  calendar(){
    this.router.navigate(['mobile-view-calendar']);
  }
  points() {
    this.router.navigate(['mobile-points']);
  }
  
  schedule() {
    this.router.navigate(['mobile-schedule']);
  }

  async logout() {
    this.router.navigate(['mobile-home'])
    this.session.clearall()
    await this.amplifyService.auth().signOut().catch(err => console.log(err));
    
  }
}
