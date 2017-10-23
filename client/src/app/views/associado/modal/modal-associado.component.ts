import { Associado } from './../../../models/associado';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Optional, Inject } from '@angular/core';

@Component({
	selector: 'app-modal-associado',
	templateUrl: './modal-associado.component.html',
	styleUrls: ['./modal-associado.component.css']
})
export class ModalAssociadoComponent implements OnInit {

	associado: Associado = new Associado();

	constructor(
		public dialogRef: MatDialogRef<ModalAssociadoComponent>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data: Associado
	) { }

	ngOnInit() {
		if (this.data)
			this.associado = this.data;
	}

}
