import { PainelService } from './painel.service';
import { TestBed, inject } from '@angular/core/testing';

describe('PainelService', () => {
    beforeEach (() =>{
        TestBed.configureTestingModule({
            providers: [PainelService]
        });
    });

    it('should be created', inject([PainelService], (service:PainelService) =>{
        expect(service).toBeTruthy();
    }));
});

/*

*/