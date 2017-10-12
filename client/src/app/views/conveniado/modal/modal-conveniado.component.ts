import { Conveniado } from 'app/models/conveniado';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { Component, OnInit, Optional, Inject } from '@angular/core';

@Component({
	selector: 'app-modal-conveniado',
	templateUrl: './modal-conveniado.component.html',
	styleUrls: ['./modal-conveniado.component.css']
})
export class ModalConveniadoComponent implements OnInit {

	conveniado: Conveniado = new Conveniado();

	constructor(
		public dialogRef: MdDialogRef<ModalConveniadoComponent>,
		@Optional() @Inject(MD_DIALOG_DATA) public data: Conveniado
	) { }

	ngOnInit() {
		if (this.data)
			this.conveniado = this.data;
	}

}
