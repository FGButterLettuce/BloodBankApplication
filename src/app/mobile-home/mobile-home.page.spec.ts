import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHomePage } from './mobile-home.page';

describe('MobileHomePage', () => {
  let component: MobileHomePage;
  let fixture: ComponentFixture<MobileHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
