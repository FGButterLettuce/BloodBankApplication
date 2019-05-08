import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  msgtoken;
  constructor(private afMessaging: AngularFireMessaging) {

  }
  requestPermission() {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => { 
          this.msgtoken = token;
          console.log('Permission granted! Save to the server!', token); },
        (error) => { console.error(error); },  
      );
  }
}