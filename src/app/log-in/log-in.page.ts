import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  emiratesId: string;
  mobileNo: string;


  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(){
    this.emiratesId;
    this.mobileNo;
  }

  signup(){
    this.router.navigate(['sign-up']);
  }
}
