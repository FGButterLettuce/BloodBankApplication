import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {


  calendarPlugins = [dayGridPlugin]; // important!

  constructor(private datePicker: DatePicker) { }

  ngOnInit() {
  }

}
