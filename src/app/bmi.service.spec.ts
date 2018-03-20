import { TestBed, inject } from '@angular/core/testing';

import { BmiService } from './bmi.service';

describe('BmiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BmiService]
    });
  });

  it('should be created', inject([BmiService], (service: BmiService) => {
    expect(service).toBeTruthy();
  }));
});
