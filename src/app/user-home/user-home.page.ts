import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../services/session/session.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {
  name: string;

  constructor(public session: SessionService, private acr: ActivatedRoute, private router: Router) {
    this.name = this.session.user.attributes.name;
  }

  ngOnInit() {
  }
  points() {
    this.router.navigate(['points']);
  }

}
