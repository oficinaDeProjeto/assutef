import { TestBed, inject } from '@angular/core/testing';

import { PlanoContaService } from './planoConta.service';

describe('PlanoContaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanoContaService]
    });
  });

  it('should be created', inject([PlanoContaService], (service: PlanoContaService) => {
    expect(service).toBeTruthy();
  }));
});
