import { Masks } from './../../../services/constantes';
import { GenericService } from './../../../services/generic/generic.service';
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
	masks = Masks;

	constructor(
		public dialogRef: MatDialogRef<ModalAssociadoComponent>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data: Associado,
		private genericService: GenericService
	) { }

	ngOnInit() {
		if (this.data)
			this.associado = this.data;
	}
	
	getAddressByPostalCode(cep: string) {
		if (cep.length > 7) {
			this.genericService.getAddressByPostalCode(cep).subscribe(res => {
				this.associado.endereco = res;
			}, err => {
				console.log(err);
			})
		}
	}
}
