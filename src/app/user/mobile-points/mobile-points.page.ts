import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import * as moment from 'moment';
import { AmplifyService } from 'aws-amplify-angular';
import { SessionService } from 'src/app/services/session/session.service';


@Component({
  selector: 'app-mobile-points',
  templateUrl: './mobile-points.page.html',
  styleUrls: ['./mobile-points.page.scss'],
})
export class MobilePointsPage implements OnInit {

  id: Number;
  pointsum;
  pointreturn; 

  constructor(private amplifyService: AmplifyService, private router: Router, private session : SessionService) {
    this.pointreturn = this.session.pointobj
    this.pointsum = this.session.pointsum
    this.pointreturn.points.map((x)=>{
      x.date = moment(x.date).format('LLL')
    });
   }
   ngOnInit() {
  }
  

}
