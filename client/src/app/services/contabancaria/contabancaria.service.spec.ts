import { TestBed, inject } from '@angular/core/testing';

import { ContabancariaService } from './contabancaria.service';

describe('ContabancariaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContabancariaService]
    });
  });

  it('should be created', inject([ContabancariaService], (service: ContabancariaService) => {
    expect(service).toBeTruthy();
  }));
});
