import { TestBed, inject } from '@angular/core/testing';

import { CarrinhoService } from './carrinho.service';

describe('CarrinhoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarrinhoService]
    });
  });

  it('should be created', inject([CarrinhoService], (service: CarrinhoService) => {
    expect(service).toBeTruthy();
  }));
});
