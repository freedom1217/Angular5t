import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallhttpComponent } from './callhttp.component';

describe('CallhttpComponent', () => {
  let component: CallhttpComponent;
  let fixture: ComponentFixture<CallhttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallhttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
