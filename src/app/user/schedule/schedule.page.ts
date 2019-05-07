import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AmplifyService } from 'aws-amplify-angular'
import { SessionService } from '../../services/session/session.service';

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
  calendarevents = [];
  recordexists;
  constructor(private amplifyService: AmplifyService, public session:SessionService) {
    this.recordexists = this.session.recordexists;
    for(let i of this.session.eventsobj){
      this.calendarevents.push({title: i.name, start: i.start, end: i.end})
    }
    if(this.session.donationexists){
      this.calendarevents.push({title:"Cannot Donate During This Period", start: this.session.donationexists.start, end: this.session.donationexists.end, color:'#f04141'})
    }
   }

  ngOnInit() {
  }
  schedule(){
    if(this.recordexists)
      this.bloodgroup = this.recordexists;

    let donation ={
      body:{
        eid: this.session.eid,
        bloodgroup:this.bloodgroup,
        date: this.date,
        success: false,
        // cid: //do,
        // hid: //do
      }
    }  
    this.amplifyService.api().post('donationsapi', `/donations`, {})
    .catch(err => console.log(err));
  
    // console.log(this.datentime = this.date.split('T')[0] + 'T' + this.time.split('T')[1])
    // console.log(this.bloodgroup);
  }
}
