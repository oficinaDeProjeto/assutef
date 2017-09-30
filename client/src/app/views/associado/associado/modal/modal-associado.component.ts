import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { Associado } from 'app/models/associado';
import { Component, OnInit, Optional, Inject } from '@angular/core';

@Component({
	selector: 'app-modal-associado',
	templateUrl: './modal-associado.component.html',
	styleUrls: ['./modal-associado.component.css']
})
export class ModalAssociadoComponent implements OnInit {

	associado: Associado = new Associado();

	constructor(
		public dialogRef: MdDialogRef<ModalAssociadoComponent>,
		@Optional() @Inject(MD_DIALOG_DATA) public data: Associado
	) { }

	ngOnInit() {
		if (this.data)
			this.associado = this.data;
	}

}
