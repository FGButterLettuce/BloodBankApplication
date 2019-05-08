import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AmplifyService } from 'aws-amplify-angular'
import { SessionService } from '../../services/session/session.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-mobile-schedule',
  templateUrl: './mobile-schedule.page.html',
  styleUrls: ['./mobile-schedule.page.scss'],
})
export class MobileSchedulePage implements OnInit {
  time: String;
  date: String;
  datentime: String;
  bloodgroup: String;
  selectedcid;
  selectedhid;
  calendarPlugins = [dayGridPlugin]; // important!

  calendarevents = [];
  recordexists;
  hospital = [];
  campaign = [];

  constructor(private amplifyService: AmplifyService, public session: SessionService, public alertController: AlertController, public router: Router) {
    this.recordexists = this.session.recordexists;
    for (let i of this.session.eventsobj) {
      this.calendarevents.push({ title: i.name, start: i.start, end: i.end })
      this.campaign.push({ cid: i.cid, name: i.name });
    }
    if (this.session.donationexists) {
      this.calendarevents.push({ title: "Cannot Donate During This Period", start: this.session.donationexists.start, end: this.session.donationexists.end, color: '#f04141' })
    }
    for (let i of this.session.hospitalsobj) {
      this.hospital.push({ hid: i.hid, name: i.hname });
    }
  }
  ngOnInit() {
  }
  async presentAlert(data) {
    let alert = await this.alertController.create({
      header: 'Error',
      message: data,
      buttons: ['OK']
    });
    alert.present();
  }
  scheduleCampaignDonation() {
    if (this.recordexists)
      this.bloodgroup = this.recordexists;
    if (this.selectedcid && this.selectedhid) {
      this.selectedcid = null;
      this.selectedhid = null;
      this.presentAlert("Two Locations Selected, Please Select One")
    }
    else {
      var compare = moment(this.date.split('T')[0]).isBetween(this.session.donationexists.start,this.session.donationexists.end)
      if(compare){
        this.date = null;
        this.time = null;
        this.presentAlert("Invalid Date Selected");
      }
      if(this.selectedcid){
        let donation = {
          body: {
            eid: this.session.eid,
            bloodgroup: this.bloodgroup,
            date: this.date.split('T')[0],
            // time: this.time.split('T')[1],
            success: false,
            cid: this.selectedcid
          }
        }
        this.amplifyService.api().post('donationsapi', `/donations`, {donation})
          .catch(err => console.log(err));
        // console.log(this.datentime = this.date.split('T')[0] + 'T' + this.time.split('T')[1])
        // console.log(this.bloodgroup);
      }
      else if(this.selectedhid){
        let donation = {
          body: {
            eid: this.session.eid,
            bloodgroup: this.bloodgroup,
            date: this.date.split('T')[0],
            // time: this.time.split('T')[1],
            success: false,
            hid: this.selectedhid
          }
        }
        this.amplifyService.api().post('donationsapi', `/donations`, {})
          .catch(err => console.log(err));
      }
    }
  }
  cancel(){
    this.router.navigate(['mobile-user-home']);
  }
}

