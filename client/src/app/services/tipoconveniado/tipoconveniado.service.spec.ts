import { TestBed, inject } from '@angular/core/testing';

import { TipoconveniadoService } from './tipoconveniado.service';

describe('TipoconveniadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoconveniadoService]
    });
  });

  it('should be created', inject([TipoconveniadoService], (service: TipoconveniadoService) => {
    expect(service).toBeTruthy();
  }));
});
