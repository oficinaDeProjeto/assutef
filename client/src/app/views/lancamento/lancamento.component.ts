import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Lancamento } from '../../models/lancamento';
import { Associado } from '../../models/associado';
import { Conveniado } from '../../models/conveniado';
import { AssociadoService } from '../../services/associado/associado.service';
import { ConveniadoService } from '../../services/conveniado/conveniado.service';
import { LancamentoService } from '../../services/lancamento/lancamento.service';
import { MatSnackBar, MatDialog, MatTable } from '@angular/material';
import { ModalLancamentoComponent } from './modal/modal-lancamento.component';
import {MatTableDataSource} from './table-data-source';
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

	

	lancamento: Lancamento = new Lancamento();
	lancamentos: Lancamento[] = [];
	selectedLancamento: Lancamento = new Lancamento;
	filteredLancamentos: Lancamento[] = [];

	lancamentos2: Lancamento[] = [];
	
	conveniado: Conveniado = new Conveniado();
	conveniados: Conveniado[] = [];
	selectedConveniado: Conveniado = new Conveniado;
	filteredConveniados: Conveniado[] = [];

	associado: Associado = new Associado();
	associados: Associado[] = [];
	selectedAssociado: Associado = new Associado;
	filteredAssociados: Associado[] = [];

	displayedColumns = ['Associado', 'Conveniado', 'Valor', 'Data'];
	dataSource = new MatTableDataSource<Lancamento>(this.lancamentos);	

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	  }
  
  
  constructor(
    private associadoService: AssociadoService,
    private conveniadoService: ConveniadoService,
    private lancamentoService: LancamentoService,
    public snackBar: MatSnackBar,
    private router: Router,
	private authService: AuthService,
	public dialog: MatDialog
    
  ) {
   }


  ngOnInit() {
	this.getAll();
	
    this.getAllAssociados();
	this.getAllConveniados();
	this.dataSource.connect();
	this.dataSource.data = this.lancamentos;
	console.log(this.dataSource.data);
	console.log(this.lancamentos);
  }  

  getAll() {
	this.lancamentoService.findAll().subscribe(lancamentos => {
		this.lancamentos = <Lancamento[]>lancamentos;
		this.dataSource.data = lancamentos;
		this.filteredLancamentos = Object.assign([], this.lancamentos);
	}, err => {
		console.log(err);
	});	
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
  
  salvarLancamento(lancamento: Lancamento){
	  lancamento.dataLancamento =  new Date();
		this.lancamentoService.save(lancamento).subscribe(lancamento => {
			console.log('Lançado!');
			this.getAll();
		}, err => {
			console.log(err);
		});
	}

	newLancamento() {
		this.selectedLancamento = new Lancamento();
	}

	assignCopy() {
		this.filteredLancamentos = Object.assign([], this.lancamento);
	}

	
  
  openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
  }
  
  openDialog(lancamento: Lancamento): void {
		let dialogRef = this.dialog.open(ModalLancamentoComponent, {
			data: { lanc: lancamento, conveniados: this.conveniados, associados: this.associados }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
			this.salvarLancamento(result);
		});
	}

}
