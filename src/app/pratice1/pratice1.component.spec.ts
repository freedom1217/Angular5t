import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pratice1Component } from './pratice1.component';

describe('Pratice1Component', () => {
  let component: Pratice1Component;
  let fixture: ComponentFixture<Pratice1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pratice1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pratice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
