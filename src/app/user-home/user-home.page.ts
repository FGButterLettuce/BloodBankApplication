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

    let usr = [{
      eid: this.session.user.attributes.username,
      name: this.session.user.attributes.name,
      email: this.session.user.attributes.email,
    }]
    console.log(usr);
    this.amplifyService.api().post('donorapi', '/donor-ionic', {body: usr})
    .catch((err) => {
      console.log(`Error saving list: ${err}`)
    })
  }

  ngOnInit() {
  }
  points() {
    this.router.navigate(['points']);
  }


}
