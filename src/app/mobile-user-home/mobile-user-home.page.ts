import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobile-user-home',
  templateUrl: './mobile-user-home.page.html',
  styleUrls: ['./mobile-user-home.page.scss'],
})
export class MobileUserHomePage implements OnInit {
  eID: string;
  constructor(private acr:ActivatedRoute) { }

  ngOnInit() {
    this.eID = this.acr.snapshot.paramMap.get('id');
  }

}
