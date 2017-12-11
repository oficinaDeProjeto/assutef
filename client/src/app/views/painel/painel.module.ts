import { MatPaginatorModule} from '@angular/material';
import { LancamentoModule } from './../lancamento/lancamento.module';
import { ChequinhoService } from './../../services/chequinho/chequinho.service';
import { LancamentoService } from './../../services/lancamento/lancamento.service';
import { AssociadoService } from './../../services/associado/associado.service';
import { ConveniadoService } from './../../services/conveniado/conveniado.service';
import { PainelService } from './../../services/painelassociado/painel.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [PainelComponent], //declaração de componentes
    exports:[PainelComponent], //exportado para a classe painel os componentes
    imports: [ //importação de módulos
        CommonModule, 
        FlexLayoutModule, 
        RouterModule,
        LancamentoModule,
        MatPaginatorModule 
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], //custom dos esquemas da classe
    providers: [ //injetando metodos e registrando componentes na classe painel service que contém a listagem dos dados
        PainelService, LancamentoService, ChequinhoService
    ]
})

export class PainelModule { }

/*
NgModulo = classe que leva um objeto de metadata com as informação de como ele deve ser compilado o codigo.
Identifica componentes e diretrizes.
*/