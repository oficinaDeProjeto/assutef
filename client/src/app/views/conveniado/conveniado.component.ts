import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Conveniado } from '../../models/conveniado';
import { Tipoconveniado } from '../../models/tipoconveniado';
import { AuthService } from '../../services/auth/auth.service';
import { ModalConveniadoComponent } from './modal/modal-conveniado.component';
import { ConveniadoService } from '../../services/conveniado/conveniado.service';
import { TipoconveniadoService } from '../../services/tipoconveniado/tipoconveniado.service';

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

	constructor(
		private conveniadoService: ConveniadoService,
		private tipoconveniadoService: TipoconveniadoService,
		private router: Router,
		private authService: AuthService,
		public dialog: MatDialog) {

	}

	ngOnInit() {
		this.getAll();
		this.getAllTipoConveniados();
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

	salvarConveniado(conveniado: Conveniado) {
		this.conveniadoService.save(conveniado).subscribe(conveniado => {
			console.log('Salvo com sucesso');
			this.getAll();
		}, err => {
			console.log(err);
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
			this.filteredConveniados = Object.assign([], this.conveniado).filter(
				conveniado => conveniado.razaosocial.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
		}
	}

	openDialog(conveniado: Conveniado): void {
		let dialogRef = this.dialog.open(ModalConveniadoComponent, {
			data: { conv: conveniado, tipoconveniados: this.tipoconveniados }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
			this.salvarConveniado(result);
		});
	}
}
