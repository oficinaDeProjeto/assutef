import { AssociadoService } from './../../../services/associado/associado.service';
import { Masks } from './../../../services/constantes';
import { GenericService } from './../../../services/generic/generic.service';
import { Associado } from './../../../models/associado';
import { Chequinho } from './../../../models/chequinho';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChequinhoService } from '../../../services/chequinho/chequinho.service';

@Component({
	selector: 'app-impressao-chequinho',
	templateUrl: './impressao-chequinho.component.html',
	styleUrls: ['./impressao-chequinho.component.css']
})
export class ImpressaoChequinhoComponent implements OnInit {

	chequinhos: Chequinho[] = [];
	associado: Associado = new Associado();
	qtdeChequinho: Number;
	masks = Masks;

	constructor(
		@Optional() @Inject(MAT_DIALOG_DATA) public dataAssociado: Associado,
		@Optional() @Inject(MAT_DIALOG_DATA) public dataChequinho: Chequinho,
		private route: ActivatedRoute,
		private associadoService: AssociadoService,
		public snackBar: MatSnackBar,
		private chequinhoService: ChequinhoService
	) { }

	ngOnInit() {
	/*	if (this.dataAssociado)
			this.associado = this.dataAssociado;
		if (this.dataChequinho)
			this.chequinho = this.dataChequinho;*/
		//let idChequinho = this.route.snapshot.params["id"];
		//this.qtdeChequinho = ;
		this.tratarIDSChequinhos(this.route.snapshot.params["ids"]);
		//this.getChequinhoById(idChequinho)
	}

	tratarIDSChequinhos(str : string):void{
		for(let id of str.split("~")){
			this.chequinhoService.findById(id).subscribe(res => {
				this.chequinhos.push(res);
			}, err => {
				this.openSnackBar("Erro ao listar chequinho", "OK");
			});			
		}
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

	/**
	 * Busca chequinho por id.
	 * @param id i
	 */
	getChequinhoById(id: string) : Chequinho {
		
		return null;
	}
}
