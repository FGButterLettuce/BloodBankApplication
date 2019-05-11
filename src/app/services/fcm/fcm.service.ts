import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  msgtoken;
  constructor(private afMessaging: AngularFireMessaging, private alertController: AlertController) {

  }
  async presentAlert(header, data) {
    let alert = await this.alertController.create({
      header: header,
      message: data,
      buttons: ['OK']
    });
    alert.present();
  }
  requestPermission() {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => {
          this.msgtoken = token;
          this.presentAlert("Success", "Granted Permission for Emergency Alerts!")
        },
        (error) => { this.presentAlert("Error", "You either declined permission for emergency alerts or the device is unsupported"); console.error(error); },
      );
  }
}