import { TestBed, inject } from '@angular/core/testing';

import { RemessabancariaService } from './remessabancaria.service';

describe('RemessabancariaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemessabancariaService]
    });
  });

  it('should be created', inject([RemessabancariaService], (service: RemessabancariaService) => {
    expect(service).toBeTruthy();
  }));
});
