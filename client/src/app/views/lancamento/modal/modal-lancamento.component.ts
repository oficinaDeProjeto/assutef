import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Lancamento } from '../../../models/lancamento';
import { Conveniado } from '../../../models/conveniado';
import { ConveniadoService } from '../../../services/conveniado/conveniado.service';
import { Associado } from '../../../models/associado';
import { AssociadoService } from '../../../services/associado/associado.service';


@Component({
  selector: 'app-model-lancamento',
  templateUrl: './modal-lancamento.component.html',
  styleUrls: ['./modal-lancamento.component.css']
})
export class ModalLancamentoComponent implements OnInit {

  associados: Associado[] = [];
  conveniados: Conveniado[] = [];
  lancamento: Lancamento = new Lancamento();
  
  constructor(
    public dialogRef: MatDialogRef<ModalLancamentoComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data,		
    private associadoService: AssociadoService,
    private conveniadoService: ConveniadoService,
    
  ) {
   }

  ngOnInit() {
    if (this.data) {
        if (this.data.lanc != null) {
            this.lancamento = this.data.conv;
        }
        this.associados = this.data.associados;
        this.conveniados = this.data.conveniados;
    }
  }  
  
}
