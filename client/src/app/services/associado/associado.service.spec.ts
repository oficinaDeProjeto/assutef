import { TestBed, inject } from '@angular/core/testing';

import { AssociadoService } from './associado.service';

describe('AssociadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssociadoService]
    });
  });

  it('should be created', inject([AssociadoService], (service: AssociadoService) => {
    expect(service).toBeTruthy();
  }));
});
