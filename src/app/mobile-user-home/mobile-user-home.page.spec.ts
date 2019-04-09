import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileUserHomePage } from './mobile-user-home.page';

describe('MobileUserHomePage', () => {
  let component: MobileUserHomePage;
  let fixture: ComponentFixture<MobileUserHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileUserHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileUserHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
