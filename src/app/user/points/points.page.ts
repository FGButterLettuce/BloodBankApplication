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

// console.log(this.pointreturn)
// this.points = [
//   {date: moment(new Date()).format('LLL'),value: 45},
//   {date: moment(new Date('1998-11-16T02:50:00')).format('LLL'), value: 65},
//   {date: moment(new Date('2015-11-16T08:30:00')).format('LLL'), value: 88},
//   {date: moment(new Date('1968-11-16T00:00:00')).format('LLL'), value: 88},
//   {date: moment(new Date('2019-11-16T08:30:00')).format('LLL'), value: 41}
// ]
// this.value = [45, 65, 88, 88, 41];//returned value array
// this.date = [new Date(), new Date('1968-11-16T00:00:00'), new Date('1998-11-16T02:50:00'), new Date('2015-11-16T08:30:00'), new Date('2019-11-16T08:30:00')];