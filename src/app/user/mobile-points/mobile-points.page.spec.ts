import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePointsPage } from './mobile-points.page';

describe('MobilePointsPage', () => {
  let component: MobilePointsPage;
  let fixture: ComponentFixture<MobilePointsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePointsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
