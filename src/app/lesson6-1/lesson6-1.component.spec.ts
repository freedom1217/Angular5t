import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson61Component } from './lesson6-1.component';

describe('Lesson61Component', () => {
  let component: Lesson61Component;
  let fixture: ComponentFixture<Lesson61Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson61Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
