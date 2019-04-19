import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {
  eID: string;

  constructor(private acr:ActivatedRoute, private router:Router) {
    this.eID = this.acr.snapshot.paramMap.get('id');

   }

  ngOnInit() {
  }

}
