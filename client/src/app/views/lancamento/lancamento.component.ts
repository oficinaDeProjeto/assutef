import { Component, OnInit, ElementRef, ViewChild, Optional } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Lancamento } from '../../models/lancamento';
import { Associado } from '../../models/associado';
import { Conveniado } from '../../models/conveniado';
import { AssociadoService } from '../../services/associado/associado.service';
import { ConveniadoService } from '../../services/conveniado/conveniado.service';
import { LancamentoService } from '../../services/lancamento/lancamento.service';
import { MatSnackBar, MatDialog, MatTable, MatPaginator, MatSort } from '@angular/material';
import { ModalLancamentoComponent } from './modal/modal-lancamento.component';
import { MatTableDataSource } from './table-data-source';
import { ConfirmDialogService } from './../../components/common/confirm-dialog/confirm-dialog.service';
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

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;



	el: Elemento = new Elemento();

	lancamento: Lancamento = new Lancamento();
	lancamentos: Lancamento[] = [];
	selectedLancamento: Lancamento = new Lancamento;
	filteredLancamentos: Lancamento[] = [];
	finalLancamentos: Lancamento[] = [];

	lancamentos2: Lancamento[] = [];

	conveniado: Conveniado = new Conveniado();
	conveniados: Conveniado[] = [];
	selectedConveniado: Conveniado = new Conveniado;
	filteredConveniados: Conveniado[] = [];

	associado: Associado = new Associado();
	associados: Associado[] = [];
	selectedAssociado: Associado = new Associado;
	filteredAssociados: Associado[] = [];

	ELEMENT_DATA: Elemento[] = [];

	displayedColumns = ['Associado', 'Conveniado', 'Valor', 'Data', 'acao'];
	dataSource = new MatTableDataSource<Elemento>(this.ELEMENT_DATA);





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
		public dialog: MatDialog,
		public confirmDialogService: ConfirmDialogService) {
	}



	ngOnInit() {

		this.getAll();

		this.getAllAssociados();
		this.getAllConveniados();
		this.construirData(this.lancamentos);


	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	getAll() {
		this.lancamentoService.findAll().subscribe(lancamentos => {
			this.lancamentos = <Lancamento[]>lancamentos;
			this.filteredLancamentos = Object.assign([], this.lancamentos);
			this.construirData(this.lancamentos);
			this.filterLancamento("");

		}, err => {
			console.log(err);
		});
	}

	getAllAssociados() {
		this.associadoService.findAll().subscribe(a => {
			this.associados = <Associado[]>a;
		}, err => {
			console.log("Erro ao listar associados");
		});
	}

	getAllConveniados() {
		this.conveniadoService.findAll().subscribe(a => {
			this.conveniados = <Conveniado[]>a;
		}, err => {
			console.log("Erro ao listar conveniados");
		});
	}

	salvarLancamento(lancamento: Lancamento) {
		lancamento.dataLancamento = new Date();
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
			width: '40%',

			data: { lanc: lancamento, conveniados: this.conveniados, associados: this.associados }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
			this.getAll();
		});
	}

	delete(id: string) {

		this.confirmDialogService.confirm(
			'Confirmação',
			`Você tem ceteza que deseja remover esse lançamento?`)
			.subscribe(res => {
				if (res) {
					this.lancamentoService.delete(id).subscribe(lancamento => {
						this.openSnackBar("Removido com sucesso", "OK");
						location.reload();
					}, err => {
						this.openSnackBar("Não foi possível remover o lancamento", "OK");
					})
				}

			});

	}



	findAll() {
		this.lancamentoService.findAll().subscribe(lancamentos => {
			this.lancamentos = <Lancamento[]>lancamentos;
			this.filteredLancamentos = Object.assign([], this.lancamentos);
		}, err => {
			this.openSnackBar("Não foi possível carregar lançamentos", "OK");
		});
	}

	construirData(lancamentos: Lancamento[]) {



		for (let index = 0; index < lancamentos.length; index++) {

			this.el = new Elemento();

			this.el.associado = lancamentos[index].associado.nome;
			this.el.conveniado = lancamentos[index].conveniado.razaosocial;
			this.el.dia = lancamentos[index].dataLancamento;
			this.el.valor = lancamentos[index].valor;
			this.el.id = lancamentos[index].id;

			this.ELEMENT_DATA[index] = this.el;
			this.dataSource.connect();
			this.dataSource.data = this.ELEMENT_DATA;


		}
	}


	filterLancamento(query) {
		if (!query) {
			this.filteredLancamentos = Object.assign([], this.lancamentos);
		} else {
			this.filteredLancamentos = Object.assign([], this.lancamentos).filter(
				u => u.nome.toLowerCase().indexOf(query.toLowerCase()) > -1 || u.email.toLowerCase().indexOf(query.toLowerCase()) > -1
			);
		}
		this.finalLancamentos = this.filteredLancamentos.slice(0, Math.min(this.filteredLancamentos.length, this.paginator.pageSize));
	}


	onPaginateChange(event):void{
		let startIndex = event.pageIndex * event.pageSize;
		let endIndex = Math.min(startIndex + this.paginator.pageSize, this.filteredLancamentos.length);
		this.finalLancamentos = this.filteredLancamentos.slice(startIndex, endIndex);
		
	 }

	

}

export class Elemento {
	associado: string;
	conveniado: string;
	valor: number;
	dia: Date;
	id: string;
}

