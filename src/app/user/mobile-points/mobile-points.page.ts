import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-mobile-points',
  templateUrl: './mobile-points.page.html',
  styleUrls: ['./mobile-points.page.scss'],
})
export class MobilePointsPage implements OnInit {

  id: Number;
  points: 
    {
      date: string,
      value: Number
    }[];
  
  date: Date[];
  value: Number[];

  constructor(private acr: ActivatedRoute, private router: Router) {
    // GET ALL POINTS FROM SPECIFIED ID
    this.points = [
      {date: moment(new Date()).format('LLL'),value: 45},
      {date: moment(new Date('1998-11-16T02:50:00')).format('LLL'), value: 65},
      {date: moment(new Date('2015-11-16T08:30:00')).format('LLL'), value: 88},
      {date: moment(new Date('1968-11-16T00:00:00')).format('LLL'), value: 88},
      {date: moment(new Date('2019-11-16T08:30:00')).format('LLL'), value: 41}
    ]
    this.value = [45, 65, 88, 88, 41];//returned value array
this.date = [new Date(), new Date('1968-11-16T00:00:00'), new Date('1998-11-16T02:50:00'), new Date('2015-11-16T08:30:00'), new Date('2019-11-16T08:30:00')];//returned date array
this.acr.snapshot.paramMap.get('id');
   }
   ngOnInit() {
  }
  

}
