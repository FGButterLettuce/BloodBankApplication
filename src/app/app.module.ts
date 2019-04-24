import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { SessionService } from './services/session/session.service';


import { CountUpModule } from 'countup.js-angular2';
import * as moment from 'moment';

import Amplify from 'aws-amplify';
import amplify from 'src/aws-exports.js';
Amplify.configure(amplify);


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,CountUpModule, AmplifyAngularModule],
  providers: [
    StatusBar,
    SessionService,
    AmplifyService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
