import { AssociadoService } from './../../../services/associado/associado.service';
import { Masks } from './../../../services/constantes';
import { GenericService } from './../../../services/generic/generic.service';
import { Associado } from './../../../models/associado';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
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
		private genericService: GenericService,
		private associadoService: AssociadoService,
		public snackBar: MatSnackBar
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
				this.openSnackBar(`Não foi encontrado endreço no cep ${cep}`, "OK");
			})
		}
	}

	findByCpf(cpf: string) {
		this.associadoService.findByCpf(cpf).subscribe(res => {
			if (res.length > 0) {
				this.openSnackBar(`O Usuário  ${res[0].nome}, já possui cadastro com o cpf ${cpf}.`, "OK");
				//Não está funcionando.
				this.associado.cpf = '';
			}
		});
	}

	findByEmail(email: string) {
		this.associadoService.findByEmail(email).subscribe(res => {
			if (res.length > 0) {
				this.openSnackBar(`O Usuário  ${res[0].nome}, já possui cadastro com o email ${email}.`, "OK");
				//Não está funcionando.
				this.associado.email = '';
			}
		});
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

}
