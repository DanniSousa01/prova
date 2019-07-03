import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoModalPage } from './contato-modal.page';

describe('ContatoModalPage', () => {
  let component: ContatoModalPage;
  let fixture: ComponentFixture<ContatoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
