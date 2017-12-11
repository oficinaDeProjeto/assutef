import { Contabancaria } from './../../../models/contabancaria';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { GenericService } from '../../../services/generic/generic.service';
import { ContabancariaService } from '../../../services/contabancaria/contabancaria.service';
import { BancoService } from '../../../services/banco/banco.service';
import { Banco } from '../../../models/banco';
import { Masks } from '../../../services/constantes';


@Component({
	selector: 'app-modal-contabancaria',
	templateUrl: './modal-contabancaria.component.html',
	styleUrls: ['./modal-contabancaria.component.css']
})
export class ModalContabancariaComponent implements OnInit {
	bancos: Banco[] = [];
	contabancaria: Contabancaria = new Contabancaria();
	masks = Masks;

//construtores
	constructor(
		public dialogRef: MatDialogRef<ModalContabancariaComponent>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data: Contabancaria,
		public snackBar: MatSnackBar,
		private genericService: GenericService,
		private contabancariaService: ContabancariaService,
		private bancoService: BancoService
	) { }
//abertura do modal de contabancarias trazendo todas os bancos
	ngOnInit() {
		if (this.data) {
			this.contabancaria = this.data;
		}
		this.findAllBanco();
		//this.categorias = this.data.categoria;
	}
//buscar categorias
	findAllBanco() {
		this.bancoService.findAll().subscribe(res => {
			this.bancos = res;
		}, err => {
			this.openSnackBar("Erro ao listar banco", "OK");
		})
	}
	//msg na parte inferior da tela
	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

}
