import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSchedulePage } from './mobile-schedule.page';

describe('MobileSchedulePage', () => {
  let component: MobileSchedulePage;
  let fixture: ComponentFixture<MobileSchedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSchedulePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
