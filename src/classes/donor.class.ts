// import { v4 as uuid } from 'uuid';

export class Donor {
  eid: any;
  email: string;
  name: string;
  pointid: Number; 

  constructor(params){
    this.email = params.email;
    this.eid = params.eid;
    this.name = params.name;
    this.pointid = params.pointid;
  }
}
