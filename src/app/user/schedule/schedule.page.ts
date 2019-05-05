import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  time:String;
  date:String;
  datentime:String;
  bloodgroup:String;
  calendarPlugins = [dayGridPlugin]; // important!

  constructor() { }

  ngOnInit() {
  }
  schedule(){
    console.log(this.datentime = this.date.split('T')[0] + 'T' + this.time.split('T')[1])
    console.log(this.bloodgroup);
  }
}
