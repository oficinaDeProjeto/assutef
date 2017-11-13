import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { Tipoconveniado } from '../../../models/tipoconveniado';
import { TipoconveniadoService } from '../../../services/tipoconveniado/tipoconveniado.service';

@Component({
	selector: 'app-modal-tipoconveniado',
	templateUrl: './modal-tipoconveniado.component.html',
	styleUrls: ['./modal-tipoconveniado.component.css']
})
export class ModalTipoconveniadoComponent implements OnInit {
	tipoconveniado: Tipoconveniado = new Tipoconveniado();

	constructor(
		public dialogRef: MatDialogRef<ModalTipoconveniadoComponent>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data: Tipoconveniado,
		private tipoconveniadoService: TipoconveniadoService,
	) { }

	ngOnInit() {
		if (this.data) 
			this.tipoconveniado = this.data;		
	}
}
