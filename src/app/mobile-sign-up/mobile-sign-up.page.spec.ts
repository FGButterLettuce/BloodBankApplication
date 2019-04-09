import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSignUpPage } from './mobile-sign-up.page';

describe('MobileSignUpPage', () => {
  let component: MobileSignUpPage;
  let fixture: ComponentFixture<MobileSignUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSignUpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
