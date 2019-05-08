import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileViewCalendarPage } from './mobile-view-calendar.page';

describe('MobileViewCalendarPage', () => {
  let component: MobileViewCalendarPage;
  let fixture: ComponentFixture<MobileViewCalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileViewCalendarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileViewCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
