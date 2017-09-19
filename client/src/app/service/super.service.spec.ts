import { TestBed, inject } from '@angular/core/testing';

import { SuperService } from './super.service';

describe('SuperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperService]
    });
  });

  it('should be created', inject([SuperService], (service: SuperService) => {
    expect(service).toBeTruthy();
  }));
});
