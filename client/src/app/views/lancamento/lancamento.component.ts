import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import { Lancamento } from '../../models/lancamento';
import { Associado } from '../../models/associado';
import { Conveniado } from '../../models/conveniado';
import { AssociadoService } from '../../services/associado/associado.service';
import { ConveniadoService } from '../../services/conveniado/conveniado.service';
import { LancamentoService } from '../../services/lancamento/lancamento.service';
import { MatSnackBar } from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';


@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {

  associados: Associado[] = [];
  conveniados: Conveniado[] = [];
  lancamento: Lancamento = new Lancamento();
  
  constructor(
    private associadoService: AssociadoService,
    private conveniadoService: ConveniadoService,
    private lancamentoService: LancamentoService,
    public snackBar: MatSnackBar
    
  ) {
   }

  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.getAllAssociados();
    this.getAllConveniados();
  }  

  getAllAssociados(){
		this.associadoService.findAll().subscribe(a => {
			this.associados = <Associado[]> a;
		}, err => {
			console.log("Erro ao listar associados");			
		});
  }

  getAllConveniados(){
		this.conveniadoService.findAll().subscribe(a => {
			this.conveniados = <Conveniado[]> a;
		}, err => {
			console.log("Erro ao listar conveniados");			
		});
  }
  
  salvarLancamento(){
		this.lancamento.dataLancamento = new Date();
		this.lancamentoService.save(this.lancamento).subscribe(lancamento => {
			this.openSnackBar("Lançado!", "OK");			
		}, err => {
			this.openSnackBar("Erro ao lançar", "OK");
		});
	}
  
  openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

}
