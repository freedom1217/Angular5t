import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelDrivenComponent } from './ng-model-driven.component';

describe('NgModelDrivenComponent', () => {
  let component: NgModelDrivenComponent;
  let fixture: ComponentFixture<NgModelDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgModelDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModelDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
