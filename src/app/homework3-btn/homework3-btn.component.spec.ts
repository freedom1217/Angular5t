import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework3BtnComponent } from './homework3-btn.component';

describe('Homework3BtnComponent', () => {
  let component: Homework3BtnComponent;
  let fixture: ComponentFixture<Homework3BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homework3BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework3BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
