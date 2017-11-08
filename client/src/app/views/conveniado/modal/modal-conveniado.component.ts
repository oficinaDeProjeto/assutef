
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Conveniado } from '../../../models/conveniado';
import { Tipoconveniado } from '../../../models/tipoconveniado';
import { TipoconveniadoService } from '../../../services/tipoconveniado/tipoconveniado.service';
@Component({
	selector: 'app-modal-conveniado',
	templateUrl: './modal-conveniado.component.html',
	styleUrls: ['./modal-conveniado.component.css']
})
export class ModalConveniadoComponent implements OnInit {

	conveniado: Conveniado = new Conveniado();
	tipoconveniados: Tipoconveniado[] = [];

	constructor(
		public dialogRef: MatDialogRef<ModalConveniadoComponent>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data,		
		private tipoconveniadoService: TipoconveniadoService,
	) { }

	ngOnInit() {
		if (this.data) {
			if (this.data.conv != null) {
				this.conveniado = this.data.conv;
			}
			this.tipoconveniados = this.data.tipoconveniados;
		}
	}
}
