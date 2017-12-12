import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar, MatPaginator } from '@angular/material';
import { Conveniado } from '../../models/conveniado';
import { Tipoconveniado } from '../../models/tipoconveniado';
import { AuthService } from '../../services/auth/auth.service';
import { ModalConveniadoComponent } from './modal/modal-conveniado.component';
import { ConveniadoService } from '../../services/conveniado/conveniado.service';
import { TipoconveniadoService } from '../../services/tipoconveniado/tipoconveniado.service';
import { ConfirmDialogService } from '../../components/common/confirm-dialog/confirm-dialog.service';
import { BancoService } from '../../services/banco/banco.service';
import { Banco } from '../../models/banco';
import { Contacorrente } from '../../models/contacorrente';
import { MaskService } from '../../directives/mask/mask.service';
import { GenericService } from '../../services/generic/generic.service';

@Component({
	selector: 'app-conveniado',
	templateUrl: './conveniado.component.html',
	styleUrls: ['./conveniado.component.css']
})
export class ConveniadoComponent implements OnInit {

	@ViewChild(MatPaginator) paginator: MatPaginator;

	conveniado: Conveniado = new Conveniado();
	conveniados: Conveniado[] = [];
	selectedConveniado: Conveniado = new Conveniado;
	filteredConveniados: Conveniado[] = [];
	finalConveniados: Conveniado[] = [];

	tipoconveniado: Tipoconveniado = new Tipoconveniado();
	tipoconveniados: Tipoconveniado[] = [];
	selectedTipoconveniado: Tipoconveniado = new Tipoconveniado;
	filteredTipoconveniados: Tipoconveniado[] = [];

	banco: Banco = new Banco();
	bancos: Banco[] = [];
	selectedBanco: Banco = new Banco;
	filteredBancos: Banco[] = [];

	constructor(
		private conveniadoService: ConveniadoService,
		private tipoconveniadoService: TipoconveniadoService,
		private genericService: GenericService,
		private maskService: MaskService,
		private bancoService: BancoService,
		private router: Router,
		private authService: AuthService,
		public snackBar: MatSnackBar,
		public confirmDialogService: ConfirmDialogService,
		public dialog: MatDialog) {

	}

	ngOnInit() {
		this.getAll();
		this.getAllTipoConveniados();
		this.getAllBancos();
	}

	getAll() {
		this.conveniadoService.findAll().subscribe(conveniados => {
			this.conveniados = <Conveniado[]>conveniados;
			this.filteredConveniados = Object.assign([], this.conveniados);
			this.filterConveniado("");
		}, err => {
			console.log(err);
		});
	}

	getAllTipoConveniados() {
		this.tipoconveniadoService.findAll().subscribe(tipoconveniados => {
			this.tipoconveniados = <Tipoconveniado[]>tipoconveniados;
			this.filteredTipoconveniados = Object.assign([], this.tipoconveniados);
		}, err => {
			console.log(err);
		});
	}

	getAllBancos() {
		this.bancoService.findAll().subscribe(bancos => {
			this.bancos = <Banco[]>bancos;
			this.filteredBancos = Object.assign([], this.bancos);
		}, err => {
			console.log(err);
		});
	}

	salvarConveniado(conveniado: Conveniado) {
		this.conveniadoService.save(conveniado).subscribe(conveniado => {
			this.openSnackBar("Salvo com sucesso", "OK");
			this.getAll();
		}, err => {
			this.openSnackBar("Não foi possível salvar o conveniado", "OK");
		});
	}

	newConveniado() {
		this.selectedConveniado = new Conveniado();
	}

	assignCopy() {
		this.filteredConveniados = Object.assign([], this.conveniado);
	}

	filterConveniado(query) {
		if (!query) {
			this.filteredConveniados = Object.assign([], this.conveniados);
		} else {
			this.filteredConveniados = Object.assign([], this.conveniados).filter(
				conveniado => conveniado.razaosocial.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
		}
		this.finalConveniados = this.filteredConveniados.slice(0, Math.min(this.filteredConveniados.length, this.paginator.pageSize));
	}

	openDialog(conveniado: Conveniado): void {
		let dialogRef = this.dialog.open(ModalConveniadoComponent, {
			data: { conv: conveniado, tipoconveniados: this.tipoconveniados, bancos: this.bancos }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
			this.salvarConveniado(result);
		});
	}

	delete(conveniado: Conveniado) {
		this.confirmDialogService.confirm(
			'Confirmação',
			`Você tem ceteza que deseja remover o conveniado ${conveniado.razaosocial}?`)
			.subscribe(res => {
				if (res) {
					this.conveniadoService.delete(conveniado.id).subscribe(conveniado => {
						this.openSnackBar("Removido com sucesso", "OK");
						this.getAll();
					}, err => {
						this.openSnackBar("Não foi possível remover o conveniado", "OK");
					})
				}
			}
		);
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

	onPaginateChange(event):void{
		let startIndex = event.pageIndex * event.pageSize;
		let endIndex = Math.min(startIndex + this.paginator.pageSize, this.filteredConveniados.length);
		this.finalConveniados = this.filteredConveniados.slice(startIndex, endIndex);
		
	 }
}
