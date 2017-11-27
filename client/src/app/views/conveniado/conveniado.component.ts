import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Conveniado } from '../../models/conveniado';
import { Tipoconveniado } from '../../models/tipoconveniado';
import { AuthService } from '../../services/auth/auth.service';
import { ModalConveniadoComponent } from './modal/modal-conveniado.component';
import { ConveniadoService } from '../../services/conveniado/conveniado.service';
import { TipoconveniadoService } from '../../services/tipoconveniado/tipoconveniado.service';
import { ConfirmDialogService } from '../../components/common/confirm-dialog/confirm-dialog.service';
import { BancoService } from '../../services/banco/banco.service';
import { Banco } from '../../models/banco';

@Component({
	selector: 'app-conveniado',
	templateUrl: './conveniado.component.html',
	styleUrls: ['./conveniado.component.css']
})
export class ConveniadoComponent implements OnInit {

	conveniado: Conveniado = new Conveniado();
	conveniados: Conveniado[] = [];
	selectedConveniado: Conveniado = new Conveniado;
	filteredConveniados: Conveniado[] = [];

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
			`Você tem ceteza que deseja remover o associado ${conveniado.razaosocial}?`)
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
}
