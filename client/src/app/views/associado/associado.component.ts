import { AssociadoService } from './../../services/associado/associado.service';
import { GenericService } from './../../services/generic/generic.service';
import { AuthService } from './../../services/auth/auth.service';
import { Associado } from './../../models/associado';
import { ModalAssociadoComponent } from './modal/modal-associado.component';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-associado',
	templateUrl: './associado.component.html',
	styleUrls: ['./associado.component.css']
})
export class AssociadoComponent implements OnInit {

	associado: Associado = new Associado();
	associados: Associado[] = [];
	selectedAssociado: Associado = new Associado;
	filteredAssociados: Associado[] = [];

	constructor(
		private genercService: GenericService,
		private associadoService: AssociadoService,
		private router: Router,
		private authService: AuthService,
		public dialog: MatDialog,
		public snackBar: MatSnackBar
	) {
	}

	ngOnInit() {
		this.findAll();
	}


	findAll() {
		this.associadoService.findAll().subscribe(associados => {
			this.associados = <Associado[]>associados;
			this.filteredAssociados = Object.assign([], this.associados);
		}, err => {
			this.openSnackBar("Não foi possível carregar associados", "OK");
		});
	}

	newAssociado() {
		this.selectedAssociado = new Associado();
	}

	assignCopy() {
		this.filteredAssociados = Object.assign([], this.associado);
	}

	filterAssociado(query) {
		if (!query) {
			this.filteredAssociados = Object.assign([], this.associados);
		} else {
			this.filteredAssociados = Object.assign([], this.associado).filter(
				associado => associado.descricao.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
		}
	}

	openDialog(associado: Associado): void {
		let dialogRef = this.dialog.open(ModalAssociadoComponent, {
			data: associado
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.save(result);
			}
		});
	}

	save(associado: Associado) {
		this.associadoService.save(associado).subscribe(associado => {
			this.openSnackBar("Salvo com sucesso", "OK");
			this.findAll();
		}, err => {
			this.openSnackBar("Não foi possível salvar associado", "OK");
		});
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}
}
