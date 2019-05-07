import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular'
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user: any;
  eid;
  pointobj;
  pointsum = 0;

  eventsobj;
  recordexists = {
    val: false,
    bloodgroup: String
  }
  donationexists ={
    start: String,
    end: null
  };

  constructor(private amplifyService: AmplifyService) {

  }

  async getPoints(eid) {
    await this.amplifyService.api().get('points', `/points/${eid}`, {}).then((res) => {
      if (res && res.length > 0) {
        this.pointobj = res[0];
        this.pointobj.points.map((x) => {
          this.pointsum += x.point
        });
      }
      else
        this.pointobj = [];
    }).catch((err) => {
      console.log(err);
    });
  }

  async getEvents() {
    await this.amplifyService.api().get('campaignsapi', `/campaigns`, {}).then((res) => {
      if (res && res.length) {
        this.eventsobj = res;
      }
    }).catch(err => console.log(err));
  }

  async checkRecords(ueid) {
    var records;
    await this.amplifyService.api().get('recordsapi', `/records`, {}).then((res) => {
      if (res && res.length) {
        records = res;
      }
    }).catch(err => console.log(err));

    for (let i of records) {
      if (i.eid == ueid) {
        this.recordexists.val = true;
        this.recordexists.bloodgroup = i.bloodgroup;
      }
    }
  }
  async getDonations(ueid) {
    var donations;
    await this.amplifyService.api().get('donationsapi', `/donations`, {}).then((res) => {
      if (res && res.length) {
        donations = res;
      }
    }).catch(err => console.log(err));

    for (let i of donations) {
      if (i.eid == ueid) {
        this.donationexists.start = i.date;
        this.donationexists.end = moment(i.date).add(90,'days').format('YYYY-MM-DD')
      }
    }
  }
}

