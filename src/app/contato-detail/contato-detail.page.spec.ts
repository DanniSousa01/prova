import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoDetailPage } from './contato-detail.page';

describe('ContatoDetailPage', () => {
  let component: ContatoDetailPage;
  let fixture: ComponentFixture<ContatoDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
