import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, MatCheckbox, MatDialog, MatInput } from '@angular/material';
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Lancamento } from '../../../models/lancamento'; 
import {LancamentoService} from '../../../services/lancamento/lancamento.service';
import { Conveniado } from '../../../models/conveniado';
import { ConveniadoService } from '../../../services/conveniado/conveniado.service';
import { Associado } from '../../../models/associado';
import { AssociadoService } from '../../../services/associado/associado.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {LancamentoComponent} from '../lancamento.component';
import {BrowserModule} from '@angular/platform-browser';
import {ViewChild} from '@angular/core';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { Chequinho } from '../../../models/chequinho';
import { ChequinhoService } from '../../../services/chequinho/chequinho.service';




@Component({
  selector: 'app-model-lancamento',
  templateUrl: './modal-lancamento.component.html',
  styleUrls: ['./modal-lancamento.component.css']
})
export class ModalLancamentoComponent implements OnInit {

  lancamentoComponent: LancamentoComponent;
  
  @ViewChild('inptassoc')
  inptassoc: any;

  @ViewChild('checkchequinho')
  checkchequinho: MatCheckbox;


  valueassoc: string = '';
  valuevlr: string;
  myControl: FormControl = new FormControl();
  myControl2: FormControl = new FormControl();
  associados: Associado[] = [];
  conveniados: Conveniado[] = [];
  lancamento: Lancamento = new Lancamento();
  filteredAssociados: Observable<Associado[]>;
  filteredConveniados: Observable<Conveniado[]>;
  associadoSelct: Associado;
  chequinhos: Chequinho[] = [];
  
  constructor(
    public dialogRef: MatDialogRef<ModalLancamentoComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data,		
    private associadoService: AssociadoService,
    private conveniadoService: ConveniadoService,
    private lancamentoService: LancamentoService,
    private chequinhoService: ChequinhoService,
    private snackBar: MatSnackBar,
    public dialogChequinho: MatDialog,
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

  
  salvarusuario(){

    if(this.checkchequinho){
      
      this.chequinhoService.findByAssociado(this.lancamento.associado.id).subscribe(res => {
        this.chequinhos = <Chequinho[]> res;
      }, err => {
        console.log("Erro ao listar chequinhos");
      });

      for(let chequinho of this.chequinhos){
        if(chequinho.ativo){
          chequinho.ativo = false;
          break;
        }
      }

    }else{
      if(this.lancamento == null){
        this.lancamento = new Lancamento();
      }

      this.lancamento.dataLancamento =  new Date();
      
      this.lancamentoService.save(this.lancamento).subscribe(lancamento => {
        console.log('Lançado!');
        this.openSnackBar('Lançado', "Ok");


      }, err => {
        console.log(err);
      });
      
      this.valueassoc = null;
      this.inptassoc.nativeElement.focus();
    }  

  }


  openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
  }

}