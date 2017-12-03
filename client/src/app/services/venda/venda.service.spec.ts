import { TestBed, inject } from '@angular/core/testing';

import { VendaService } from './venda.service';

describe('VendaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendaService]
    });
  });

  it('should be created', inject([VendaService], (service: VendaService) => {
    expect(service).toBeTruthy();
  }));
});
