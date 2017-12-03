import { Conveniado } from './../../models/conveniado';
import { ConveniadoService } from './../../services/conveniado/conveniado.service';
import { LancamentoService } from './../../services/lancamento/lancamento.service';
import { Lancamento } from './../../models/lancamento';
import { Router } from '@angular/router';
import { ChequinhoService } from './../../services/chequinho/chequinho.service';
import { PainelService } from './../../services/painelassociado/painel.service';
import { Chequinho } from './../../models/chequinho';
import { Associado } from './../../models/associado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  paginator: any;
  //array de chequinhos e lançamentos
  chequinhos: Chequinho[] = []; //tipagem de tipo e inicializando com vazio
  lancamentos: Lancamento[] = [];
  conveniado: Conveniado[] = [];
  
  constructor(
    private router: Router,
    private painelService: PainelService,
    private chequinhoService: ChequinhoService,
    private lancamentoService: LancamentoService,
    private ConveniadoService: ConveniadoService,
  ) { }

  ngOnInit() {//invocando a diretiva assim que instanciada
    this.getAllChequinhos();
    this.getAllLancamentos();
    //this.getAllConveniados();
  }

  getAllChequinhos(){
    this.painelService.findAllChequinhos().subscribe(chequinhos => {
      this.chequinhos = <Chequinho[]> chequinhos;
      console.log(chequinhos);
    }, err =>{
      console.log(err);
    });
  }

    getAllLancamentos() {
      this.painelService.findAllLancamentos().subscribe(lancamentos => {
        this.lancamentos = <Lancamento[]>lancamentos;
      }, err => {
        console.log(err);
      });	
    }
/*
    getAllConveniados(){
      this.painelService.findAllConveniados().subscribe(conveniado =>{
        this.conveniado = <Conveniado[]>conveniado;
      },err =>{console.log(err);
      });
    }*/

   
    onPaginateChange(event):void{
      let startIndex = event.pageIndex * event.pageSize;
      let endIndex = Math.min(startIndex + this.paginator.pageSize, this.lancamentos.length, this.chequinhos.length);
      this.lancamentos = this.lancamentos.slice(startIndex, endIndex);
      this.chequinhos = this.chequinhos.slice(startIndex, endIndex);
      
     }
}
