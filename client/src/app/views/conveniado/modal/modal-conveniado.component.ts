
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Conveniado } from '../../../models/conveniado';
import { Tipoconveniado } from '../../../models/tipoconveniado';
import { TipoconveniadoService } from '../../../services/tipoconveniado/tipoconveniado.service';
import { GenericService } from '../../../services/generic/generic.service';
import { Masks } from '../../../services/constantes';
import { Banco } from '../../../models/banco';
import { BancoService } from '../../../services/banco/banco.service';
import { Contacorrente } from '../../../models/contacorrente';
@Component({
	selector: 'app-modal-conveniado',
	templateUrl: './modal-conveniado.component.html',
	styleUrls: ['./modal-conveniado.component.css']
})
export class ModalConveniadoComponent implements OnInit {

	conveniado: Conveniado = new Conveniado();
	tipoconveniados: Tipoconveniado[] = [];
	bancos: Banco[] = [];
	masks = Masks;

	constructor(
		public dialogRef: MatDialogRef<ModalConveniadoComponent>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data,		
		private tipoconveniadoService: TipoconveniadoService,	
		private bancooService: BancoService,
		private genericService: GenericService,
		public snackBar: MatSnackBar
	) { }

	ngOnInit() {
		if (this.data) {
			if (this.data.conv != null) {
				this.conveniado = this.data.conv;
			}
			this.tipoconveniados = this.data.tipoconveniados;
			this.bancos = this.data.bancos;
			console.log(this.bancos);
		}
	}

	getAddressByPostalCode(cep: string) {
		if (cep.length > 7) {
			this.genericService.getAddressByPostalCode(cep).subscribe(res => {
				this.conveniado.endereco = res;
			}, err => {
				this.openSnackBar(`Não foi encontrado endreço no cep ${cep}`, "OK");
			})
		}
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}
}
