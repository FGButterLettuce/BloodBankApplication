import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular'
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user: any;
  eid;
  pointsum = 0;

  pointobj;
  eventsobj;
  hospitalsobj;

  recordexists = {
    val: false,
    bloodgroup: String
  }
  donationexists ={
    start: null,
    end:  null,
    bloodgroup: null
  };

  constructor(private amplifyService: AmplifyService) {

  }

  clearall(){
    this.user= null;
    this.eid;
    this.pointsum = 0;
  
    this.pointobj = null;
    this.eventsobj = null;
    this.hospitalsobj = null;
  
    this.recordexists = {
      val: false,
      bloodgroup: String
    }
    this.donationexists ={
      start: null,
      end:  null,
      bloodgroup: null
    };
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
      if (res && res.length > 0) {
        this.eventsobj = res;
      }
    }).catch(err => console.log(err));
  }

  async checkRecords(ueid) {
    var records;
    await this.amplifyService.api().get('recordsapi', `/records`, {}).then((res) => {
      if (res && res.length > 0) {
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
      if (res && res.length > 0) {
        donations = res;
      }
    }).catch(err => console.log(err));

    for (let i of donations) {
      if (i.eid == ueid && i.success == true) {
        this.donationexists.start = i.date;
        this.donationexists.end = moment(i.date).add(90,'days').format('YYYY-MM-DD');
        this.donationexists.bloodgroup = i.bloodgroup;
      }
    }
  }
  async getHospitals() {
    await this.amplifyService.api().get('hospitalsapi', `/hospitals`, {}).then((res) => {
      if (res && res.length > 0) {
        this.hospitalsobj = res;
      }
    }).catch(err => console.log(err));
  }
}

