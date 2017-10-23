import { GenericService } from './../../services/generic/generic.service';
import { AuthService } from './../../services/auth/auth.service';
import { Associado } from './../../models/associado';
import { ModalAssociadoComponent } from './modal/modal-associado.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
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
		private router: Router,
		private authService: AuthService,
		public dialog: MatDialog
	) {
	}

	ngOnInit() {
		this.getAll();
	}


	getAll() {
		this.genercService.getAll('associado').subscribe(associados => {
			this.associados = <Associado[]>associados;
			this.filteredAssociados = Object.assign([], this.associados);
		}, err => {
			console.log(err);
		});
	}

	salvarAssociado(associado: Associado) {
		this.genercService.save('associado', associado).subscribe(associado => {
			console.log('Salvo com sucesso');
			this.getAll();
		}, err => {
			console.log(err);
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
			console.log(result);
			this.salvarAssociado(result);
		});
	}
}
