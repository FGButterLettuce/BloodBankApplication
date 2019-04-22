// import { v4 as uuid } from 'uuid';

export class Donor {
  userId: any;
  email: string;
  pNo: Number;
  pointId: Number; 

  constructor(params){
    this.email = params.email;
    this.userId = params.userId;
    this.pNo = params.pNo;
    this.pointId = params.poinId;
  }
}

// export class ToDoItem {
//   id: string;
//   title: string;
//   description: string;
//   status: any;

//   constructor(params){
//     this.id = uuid();
//     this.title = params.title;
//     this.description = params.description;
//     this.status = 'new';
//   }
// }