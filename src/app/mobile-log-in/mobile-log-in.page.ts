import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-log-in',
  templateUrl: './mobile-log-in.page.html',
  styleUrls: ['./mobile-log-in.page.scss'],
})
export class MobileLogInPage implements OnInit {

  emiratesId: string;
  mobileNo: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    
  }

  signup(){
    this.router.navigate(['mobile-sign-up']);
  }


}
