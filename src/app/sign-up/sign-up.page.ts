import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

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
    this.router.navigate(['log-in']);
  }
}
