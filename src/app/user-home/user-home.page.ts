import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {
  user:any;
  name: string;
  
  constructor(private acr:ActivatedRoute, private router:Router) {
    this.user = this.acr.snapshot.paramMap.get('id');
    this.name = this.user.name;
   }

  ngOnInit() {
  }
  points(){
    this.router.navigate(['points',this.user])
  }

}
