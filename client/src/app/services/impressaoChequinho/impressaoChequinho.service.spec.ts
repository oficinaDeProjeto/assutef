import { TestBed, inject } from '@angular/core/testing';
import { ImpressaoChequinhoService } from './impressaoChequinho.service';


describe('ChequinhoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImpressaoChequinhoService]
    });
  });

  it('should be created', inject([ImpressaoChequinhoService], (service: ImpressaoChequinhoService) => {
    expect(service).toBeTruthy();
  }));
});
