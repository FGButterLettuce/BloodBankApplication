import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileLogInPage } from './mobile-log-in.page';

describe('MobileLogInPage', () => {
  let component: MobileLogInPage;
  let fixture: ComponentFixture<MobileLogInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileLogInPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileLogInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
