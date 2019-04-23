import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../services/session/session.service';

@Component({
  selector: 'app-mobile-user-home',
  templateUrl: './mobile-user-home.page.html',
  styleUrls: ['./mobile-user-home.page.scss'],
})
export class MobileUserHomePage implements OnInit {
  name: string;

  constructor(public session: SessionService, private acr: ActivatedRoute, private router: Router) {
    this.name = this.session.user.attributes.name;
  }
  ngOnInit() {
  }

  // points(){
  //   this.router.navigate(['mobile-points']);
  // }
  // schedule(){
  //   this.router.navigate(['schedule']);
  // }
  getPoints(){
    //getpoints from object
  }
}
