import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { SessionService } from '../../services/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-view-calendar',
  templateUrl: './mobile-view-calendar.page.html',
  styleUrls: ['./mobile-view-calendar.page.scss'],
})
export class MobileViewCalendarPage implements OnInit {
  calendarPlugins = [dayGridPlugin]; // important!
  calendarevents = [];

  constructor(public session: SessionService, public router: Router) {
    for (let i of this.session.eventsobj) {
      this.calendarevents.push({ title: i.name, start: i.start, end: i.end })
    }
    if (this.session.donationexists) {
      this.calendarevents.push({ title: "Cannot Donate During This Period", start: this.session.donationexists.start, end: this.session.donationexists.end, color: '#f04141' })
    }
  }
  ngOnInit() {
  }
  return() {
    this.router.navigate(['mobile-user-home']);
  }
}

