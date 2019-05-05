import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular'

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user: any;
  pointobj;
  pointsum = 0;

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
}

