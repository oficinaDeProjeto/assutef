import { Chequinho } from './../../models/chequinho';
import { GenericService } from './../../services/generic/generic.service';
import { Component, OnInit } from '@angular/core';
import { ChequinhoService } from '../../services/chequinho/chequinho.service';
import { Associado } from '../../models/associado';
import { AssociadoService } from '../../services/associado/associado.service';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-chequinho',
	templateUrl: './chequinho.component.html',
	styleUrls: ['./chequinho.component.css']
})
export class ChequinhoComponent implements OnInit {
	associados: Associado[] = [];
	chequinho: Chequinho = new Chequinho();

	constructor(
		private chequinhoService: ChequinhoService,
		private associadoService: AssociadoService,
		public snackBar: MatSnackBar,
	) { }

	ngOnInit() {
		//this.getAll();
	}

	getAllAssociados(){
		this.associadoService.findAll().subscribe(a => {
			this.associados = <Associado[]> a;
		}, err => {
			this.openSnackBar("Erro ao listar associados","OK");			
		});
	}
	
	gerarChequinho(){
		//this.chequinho.descricao = "teste";
		this.chequinhoService.save(this.chequinho).subscribe(chequinho => {
			this.openSnackBar("Chequinho(s) gerado(s) com sucesso", "OK");			
		}, err => {
			this.openSnackBar("Não foi possível gerar o(s) chequinho(s)", "OK");
		});
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}
}