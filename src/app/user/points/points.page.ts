import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';
import * as moment from 'moment';
import { SessionService } from '../../services/session/session.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.page.html',
  styleUrls: ['./points.page.scss'],
})
export class PointsPage implements OnInit {

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
