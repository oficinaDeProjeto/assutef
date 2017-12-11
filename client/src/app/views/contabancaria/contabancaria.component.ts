import { GenericService } from './../../services/generic/generic.service';
import { AuthService } from './../../services/auth/auth.service';
import { Contabancaria } from './../../models/contabancaria';
import { ModalContabancariaComponent } from './modal/modal-contabancaria.component';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { ContabancariaService } from '../../services/contabancaria/contabancaria.service';
import { Banco } from '../../models/banco';
import { ModalBancoComponent } from '../banco/modal/modal-banco.component';
import { ConfirmDialogService } from '../../components/common/confirm-dialog/confirm-dialog.service';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
/**
 * Teste para commit
 */

@Component({
	selector: 'app-contabancaria',
	templateUrl: './contabancaria.component.html',
	styleUrls: ['./contabancaria.component.css']
})
export class ContabancariaComponent implements OnInit {
	[x:string]: any;


	@ViewChild(MatPaginator) paginator: MatPaginator;

	contabancaria: Contabancaria = new Contabancaria();
	contabancarias: Contabancaria[] = [];
	selectedContabancaria: Contabancaria = new Contabancaria;
	filteredContabancarias: Contabancaria[] = [];
	finalContabancarias: Contabancaria[] = [];

//contrói
	constructor(
		private contabancariaService: ContabancariaService,
		private router: Router,
		private authService: AuthService,
		public dialog: MatDialog,
		private genericService: GenericService,
		public confirmDialogService: ConfirmDialogService,
		public snackBar: MatSnackBar
	) {
	}

	//@ViewChild('filter') filter: ElementRef;
//busca todos os cadastros
	ngOnInit() {
		this.findAll();
	}
//método para fazer busca dos produtso
	findAll() {
		this.contabancariaService.findAll().subscribe(contabancarias => {
			this.contabancarias = <Contabancaria[]>contabancarias;
			this.filteredContabancaria = Object.assign([], this.contabancarias);
			this.filterContabancaria("");
		}, err => {
			this.openSnackBar("Não foi possível carregar ", "OK");
		});
	}

	newContabancaria() {
		this.selectedContabancaria = new Contabancaria();
	}
//filtros
	assignCopy() {
		this.filteredContabancarias = Object.assign([], this.contabancaria);
	}

	filterContabancaria(query) {
		if (!query) {
			this.filteredContabancarias = Object.assign([], this.contabancarias);
		} else {
			this.filteredContabancarias = Object.assign([], this.contabancarias).filter(
				contabancaria => contabancaria.conta_numero.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
		}
		this.finalContabancarias = this.filteredContabancarias.slice(0, Math.min(this.filteredContabancarias.length, this.paginator.pageSize));
	}
//abertura da janela abaixo para informação
	openDialog(contabancaria: Contabancaria): void {
		let dialogRef = this.dialog.open(ModalContabancariaComponent, {
			data: contabancaria
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.save(result);
			}
		});
	}
//deleta o contabancaria mostrando um modal
	delete(contabancaria: Contabancaria) {
		this.confirmDialogService.confirm(
			'Confirmação',
			`Você tem ceteza que deseja remover ${contabancaria.conta_numero}?`)
			.subscribe(res => {
				if (res) {
					this.contabancariaService.delete(contabancaria.id).subscribe(contabancaria => {
						this.openSnackBar("Removido com sucesso", "OK");
						this.findAll();
					}, err => {
						this.openSnackBar("Não foi possível remover ", "OK");
					})
				}
			});
	}
//salva o contabancaria
	save(contabancaria: Contabancaria) {
		this.contabancariaService.save(contabancaria).subscribe(resultado => {
			this.openSnackBar("Salvo com sucesso", "OK");
			this.findAll();
		}, err => {
			this.openSnackBar("Não foi possível salvar a conta bancaria", "OK");
		});
	}
//janelas abaino na tela para msg
	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

	onPaginateChange(event):void{
		console.log('Paginator');
		let startIndex = event.pageIndex * event.pageSize;
		let endIndex = Math.min(startIndex + this.paginator.pageSize, this.filteredContabancarias.length);
		this.finalContabancarias = this.filteredContabancarias.slice(startIndex, endIndex);

	 }
}
