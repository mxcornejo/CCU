import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdetallePage } from './verdetalle.page';

describe('VerdetallePage', () => {
  let component: VerdetallePage;
  let fixture: ComponentFixture<VerdetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerdetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerdetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
