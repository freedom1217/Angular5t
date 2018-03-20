import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework2BtnComponent } from './homework2-btn.component';

describe('Homework2BtnComponent', () => {
  let component: Homework2BtnComponent;
  let fixture: ComponentFixture<Homework2BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homework2BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework2BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
