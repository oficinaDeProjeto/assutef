import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { Tipoconveniado } from 'app/models/tipoConveniado';

@Component({
	selector: 'app-modal-tipoconveniado',
	templateUrl: './modal-tipoconveniado.component.html',
	styleUrls: ['./modal-tipoconveniado.component.css']
})
export class ModalTipoconveniadoComponent implements OnInit {
	tipoconveniado: Tipoconveniado = new Tipoconveniado();

	constructor(
		public dialogRef: MdDialogRef<ModalTipoconveniadoComponent>,
		@Optional() @Inject(MD_DIALOG_DATA) public data: Tipoconveniado
	) { }

	ngOnInit() {
		if (this.data) 
			this.tipoconveniado = this.data;		
	}
}
