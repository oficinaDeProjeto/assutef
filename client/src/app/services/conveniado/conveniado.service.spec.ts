import { TestBed, inject } from '@angular/core/testing';

import { ConveniadoService } from './conveniado.service';

describe('ConveniadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConveniadoService]
    });
  });

  it('should be created', inject([ConveniadoService], (service: ConveniadoService) => {
    expect(service).toBeTruthy();
  }));
});
