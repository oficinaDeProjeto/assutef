import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Lancamento } from '../../../models/lancamento';
import { Conveniado } from '../../../models/conveniado';
import { ConveniadoService } from '../../../services/conveniado/conveniado.service';
import { Associado } from '../../../models/associado';
import { AssociadoService } from '../../../services/associado/associado.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';




@Component({
  selector: 'app-model-lancamento',
  templateUrl: './modal-lancamento.component.html',
  styleUrls: ['./modal-lancamento.component.css']
})
export class ModalLancamentoComponent implements OnInit {

  myControl: FormControl = new FormControl();
  myControl2: FormControl = new FormControl();
  associados: Associado[] = [];
  conveniados: Conveniado[] = [];
  lancamento: Lancamento = new Lancamento();
  filteredAssociados: Observable<Associado[]>;
  filteredConveniados: Observable<Conveniado[]>;
  
  
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
    this.filteredConveniados = this.myControl.valueChanges
    .startWith(null)
    .map(conveniado => conveniado && typeof conveniado === 'object' ? conveniado.razaosocial : conveniado)
    .map(razaosocial => razaosocial ? this.filterConveniado(razaosocial) : this.conveniados.slice());

    this.filteredAssociados = this.myControl2.valueChanges
    .startWith(null)
    .map(associado => associado && typeof associado === 'object' ? associado.nome : associado)
    .map(nome => nome ? this.filterAssociado(nome) : this.associados.slice());
  }  

  filterAssociado(name: string): Associado[] {
    return this.associados.filter(option =>
      option.nome.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  filterConveniado(name: string): Conveniado[] {
    return this.conveniados.filter(option =>
      option.razaosocial.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
  displayFnAssociado(user: Associado): string {
    return user ? user.nome : user.nome;
  }
  displayFnConveniado(user: Conveniado): string {
    return user ? user.razaosocial : user.razaosocial;
  }

}