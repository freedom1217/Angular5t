import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyclassComponent } from './dyclass.component';

describe('DyclassComponent', () => {
  let component: DyclassComponent;
  let fixture: ComponentFixture<DyclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
