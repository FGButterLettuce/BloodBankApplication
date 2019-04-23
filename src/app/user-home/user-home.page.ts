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
  user: any;

  constructor(public session: SessionService, private acr: ActivatedRoute, private router: Router, private amplifyService: AmplifyService, private events: Events) {
    this.name = this.session.user.attributes.name;
  }

  ngOnInit() {
  }
  points() {
    this.router.navigate(['points']);
  }


}
