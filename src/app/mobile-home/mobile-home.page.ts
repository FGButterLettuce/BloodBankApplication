import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session/session.service';

@Component({
  selector: 'app-mobile-home',
  templateUrl: './mobile-home.page.html',
  styleUrls: ['./mobile-home.page.scss'],
})
export class MobileHomePage implements OnInit {

  constructor(public session: SessionService,private router: Router) { }

  ngOnInit() {
  }

  signup(){
    this.router.navigate(['mobile-sign-up']);
  }

  login(){
    this.router.navigate(['mobile-log-in']);
  }
}
