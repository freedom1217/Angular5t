import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jq1Component } from './jq1.component';

describe('Jq1Component', () => {
  let component: Jq1Component;
  let fixture: ComponentFixture<Jq1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jq1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jq1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
