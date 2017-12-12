import { Remessabancaria } from './../../../models/remessabancaria';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { GenericService } from '../../../services/generic/generic.service';
import { RemessabancariaService } from '../../../services/remessabancaria/remessabancaria.service';
import { ContabancariaService } from '../../../services/contabancaria/contabancaria.service';
import { Contabancaria } from '../../../models/contabancaria';
import { Masks } from '../../../services/constantes';


@Component({
	selector: 'app-modal-remessabancaria',
	templateUrl: './modal-remessabancaria.component.html',
	styleUrls: ['./modal-remessabancaria.component.css']
})
export class ModalRemessabancariaComponent implements OnInit {
	contabancarias: Contabancaria[] = [];
	remessabancaria: Remessabancaria = new Remessabancaria();
	masks = Masks;

//construtores
	constructor(
		public dialogRef: MatDialogRef<ModalRemessabancariaComponent>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data: Remessabancaria,
		public snackBar: MatSnackBar,
		private genericService: GenericService,
		private remessabancariaService: RemessabancariaService,
		private contabancariaService: ContabancariaService
	) { }
//abertura do modal de remessabancarias trazendo todas os contabancarias
	ngOnInit() {
		if (this.data) {
			this.remessabancaria = this.data;
		}
		this.findAllContabancaria();
		//this.categorias = this.data.categoria;
	}
//buscar categorias
	findAllContabancaria() {
		this.contabancariaService.findAll().subscribe(res => {
			this.contabancarias = res;
		}, err => {
			this.openSnackBar("Erro ao listar contabancaria", "OK");
		})
	}
	//msg na parte inferior da tela
	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

}
