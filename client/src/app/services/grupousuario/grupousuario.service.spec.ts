import { TestBed, inject } from '@angular/core/testing';

import { GrupousuarioService } from './grupousuario.service';

describe('GrupousuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrupousuarioService]
    });
  });

  it('should be created', inject([GrupousuarioService], (service: GrupousuarioService) => {
    expect(service).toBeTruthy();
  }));
});
