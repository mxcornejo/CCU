import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Productos2Page } from './productos2.page';

describe('Productos2Page', () => {
  let component: Productos2Page;
  let fixture: ComponentFixture<Productos2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Productos2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Productos2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
