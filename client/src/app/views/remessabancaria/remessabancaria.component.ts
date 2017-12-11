import { GenericService } from './../../services/generic/generic.service';
import { AuthService } from './../../services/auth/auth.service';
import { Remessabancaria } from './../../models/remessabancaria';
import { ModalRemessabancariaComponent } from './modal/modal-remessabancaria.component';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { RemessabancariaService } from '../../services/remessabancaria/remessabancaria.service';
import { Contabancaria } from '../../models/contabancaria';
import { ModalContabancariaComponent } from '../contabancaria/modal/modal-contabancaria.component';
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
	selector: 'app-remessabancaria',
	templateUrl: './remessabancaria.component.html',
	styleUrls: ['./remessabancaria.component.css']
})
export class RemessabancariaComponent implements OnInit {
	[x:string]: any;


	@ViewChild(MatPaginator) paginator: MatPaginator;

	remessabancaria: Remessabancaria = new Remessabancaria();
	remessabancarias: Remessabancaria[] = [];
	selectedRemessabancaria: Remessabancaria = new Remessabancaria;
	filteredRemessabancarias: Remessabancaria[] = [];
	finalRemessabancarias: Remessabancaria[] = [];

//contrói
	constructor(
		private remessabancariaService: RemessabancariaService,
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
		this.remessabancariaService.findAll().subscribe(remessabancarias => {
			this.remessabancarias = <Remessabancaria[]>remessabancarias;
			this.filteredRemessabancaria = Object.assign([], this.remessabancarias);
			this.filterRemessabancaria("");
		}, err => {
			this.openSnackBar("Não foi possível carregar ", "OK");
		});
	}

	newRemessabancaria() {
		this.selectedRemessabancaria = new Remessabancaria();
	}
//filtros
	assignCopy() {
		this.filteredRemessabancarias = Object.assign([], this.remessabancaria);
	}

	filterRemessabancaria(query) {
		if (!query) {
			this.filteredRemessabancarias = Object.assign([], this.remessabancarias);
		} else {
			this.filteredRemessabancarias = Object.assign([], this.remessabancarias).filter(
				remessabancaria => remessabancaria.codigo_comando.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
		}
		this.finalRemessabancarias = this.filteredRemessabancarias.slice(0, Math.min(this.filteredRemessabancarias.length, this.paginator.pageSize));
	}
//abertura da janela abaixo para informação
	openDialog(remessabancaria: Remessabancaria): void {
		let dialogRef = this.dialog.open(ModalRemessabancariaComponent, {
			data: remessabancaria
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.save(result);
			}
		});
	}
//deleta o remessabancaria mostrando um modal
	delete(remessabancaria: Remessabancaria) {
		this.confirmDialogService.confirm(
			'Confirmação',
			`Você tem ceteza que deseja remover ${remessabancaria.codigo_comando}?`)
			.subscribe(res => {
				if (res) {
					this.remessabancariaService.delete(remessabancaria.id).subscribe(remessabancaria => {
						this.openSnackBar("Removido com sucesso", "OK");
						this.findAll();
					}, err => {
						this.openSnackBar("Não foi possível remover ", "OK");
					})
				}
			});
	}
//salva o remessabancaria
	save(remessabancaria: Remessabancaria) {
		this.remessabancariaService.save(remessabancaria).subscribe(resultado => {
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
		let endIndex = Math.min(startIndex + this.paginator.pageSize, this.filteredRemessabancarias.length);
		this.finalRemessabancarias = this.filteredRemessabancarias.slice(startIndex, endIndex);

	 }
}
