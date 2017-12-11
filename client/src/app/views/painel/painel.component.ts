import { Conveniado } from './../../models/conveniado';
import { ConveniadoService } from './../../services/conveniado/conveniado.service';
import { LancamentoService } from './../../services/lancamento/lancamento.service';
import { Lancamento } from './../../models/lancamento';
import { Router } from '@angular/router';
import { ChequinhoService } from './../../services/chequinho/chequinho.service';
import { PainelService } from './../../services/painelassociado/painel.service';
import { Chequinho } from './../../models/chequinho';
import { Associado } from './../../models/associado';
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  //paginator: any;
  [x:string]: any;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  lancamentos: Lancamento[] = [];
  filteredLancamentos: Lancamento[] = [];//declaração para uso da paginação
  finalLancamentos: Lancamento[] = [];
  
  constructor(
    private router: Router,
    private painelService: PainelService,
  ) { }

  ngOnInit() {//invocando a diretiva assim que instanciada buscando tds os cadastros
    this.findAll();
  }

    findAll(){
        this.painelService.findAll().subscribe(lancamentos => {
        this.lancamentos = <Lancamento[]>lancamentos;
        this.filteredLancamentos = Object.assign([], this.lancamentos); 
        this.filterLancamentos("");
      }, err => {
        console.log(err);
      });	
    }

    filterLancamentos(query) {
      if (!query) {
        this.filteredLancamentos = Object.assign([], this.lancamentos);
      } else {
        this.filteredLancamentos = Object.assign([], this.lancamentos).filter(
          lancamentos => lancamentos.name.toLowerCase().indexOf(query.toLowerCase()) > -1
        )
      }
      this.finalLancamentos = this.filteredLancamentos.slice(0, Math.min(this.filteredLancamentos.length, this.paginator.pageSize));
    }


    onPaginateChange(event):void{
      console.log('Paginator');
      let startIndex = event.pageIndex * event.pageSize;
      let endIndex = Math.min(startIndex + this.paginator.pageSize, this.filteredLancamentos.length);
      this.finalLancamentos = this.filteredLancamentos.slice(startIndex, endIndex);
      
     }

}
