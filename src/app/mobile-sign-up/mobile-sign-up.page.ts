import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-sign-up',
  templateUrl: './mobile-sign-up.page.html',
  styleUrls: ['./mobile-sign-up.page.scss'],
})
export class MobileSignUpPage implements OnInit {

  emiratesId: string;
  mobileNo: string;


  constructor(private router:Router) { }

  ngOnInit() {
  }
  signup(){
    console.log("Reached signup func");
    console.log(this.emiratesId,this.mobileNo);
    // this.router.navigate(['userhome'])
  }

  login(){
    this.router.navigate(['mobile-log-in']);
  }
}
