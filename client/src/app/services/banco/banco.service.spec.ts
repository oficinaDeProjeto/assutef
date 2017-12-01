import { TestBed, inject } from '@angular/core/testing';

import { BancoService } from './banco.service';

describe('BancoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BancoService]
    });
  });

  it('should be created', inject([BancoService], (service: BancoService) => {
    expect(service).toBeTruthy();
  }));
});
