import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mobile-user-home',
  templateUrl: './mobile-user-home.page.html',
  styleUrls: ['./mobile-user-home.page.scss'],
})
export class MobileUserHomePage implements OnInit {
  eID: string;
  constructor(private acr:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.eID = this.acr.snapshot.paramMap.get('id');
  }

  points(){
    this.router.navigate(['points',this.eID]);
  }
  schedule(){
    this.router.navigate(['schedule',this.eID]);
  }
  getPoints(){
    //getpoints from object
  }
}
