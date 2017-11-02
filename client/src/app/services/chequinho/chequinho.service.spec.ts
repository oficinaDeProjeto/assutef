import { TestBed, inject } from '@angular/core/testing';

import { ChequinhoService } from './chequinho.service';

describe('ChequinhoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChequinhoService]
    });
  });

  it('should be created', inject([ChequinhoService], (service: ChequinhoService) => {
    expect(service).toBeTruthy();
  }));
});
