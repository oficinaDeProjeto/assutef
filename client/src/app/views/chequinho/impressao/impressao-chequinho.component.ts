import { AssociadoService } from './../../../services/associado/associado.service';
import { Masks } from './../../../services/constantes';
import { GenericService } from './../../../services/generic/generic.service';
import { Associado } from './../../../models/associado';
import { Chequinho } from './../../../models/chequinho';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { Component, OnInit, Optional, Inject } from '@angular/core';

@Component({
	selector: 'app-impressao-chequinho',
	templateUrl: './impressao-chequinho.component.html',
	styleUrls: ['./impressao-chequinho.component.css']
})
export class ModalAssociadoComponent implements OnInit {

	chequinho: Chequinho = new Chequinho();
	associado: Associado = new Associado();
	masks = Masks;

	constructor(
		@Optional() @Inject(MAT_DIALOG_DATA) public dataAssociado: Associado,
		@Optional() @Inject(MAT_DIALOG_DATA) public dataChequinho: Chequinho,
		private genericService: GenericService,
		private associadoService: AssociadoService,
		public snackBar: MatSnackBar
	) { }

	ngOnInit() {
		if (this.dataAssociado)
			this.associado = this.dataAssociado;
			if (this.dataChequinho)
			this.chequinho = this.dataChequinho;
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

}
