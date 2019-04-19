import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobile-log-in',
  templateUrl: './mobile-log-in.page.html',
  styleUrls: ['./mobile-log-in.page.scss'],
})
export class MobileLogInPage implements OnInit {

  emiratesId: string;
  mobileNo: string;

  constructor(private router: Router, private acr:ActivatedRoute) { }

  ngOnInit() {
  }

  login(){
    this.emiratesId;
    this.mobileNo;
    //add authenticate function 
    this.router.navigate(['mobile-user-home/',this.emiratesId]);
  }

  signup(){
    this.router.navigate(['mobile-sign-up']);
  }


}
