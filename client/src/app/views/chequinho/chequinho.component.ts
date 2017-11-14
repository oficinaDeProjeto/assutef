import { Chequinho } from './../../models/chequinho';
import { GenericService } from './../../services/generic/generic.service';
import { Component, OnInit } from '@angular/core';
import { ChequinhoService } from '../../services/chequinho/chequinho.service';
import { Associado } from '../../models/associado';
import { AssociadoService } from '../../services/associado/associado.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
	selector: 'app-chequinho',
	templateUrl: './chequinho.component.html',
	styleUrls: ['./chequinho.component.css']
})
export class ChequinhoComponent implements OnInit {
	associados: Associado[] = [];
	chequinho: Chequinho = new Chequinho();
	chequinhos: string[] = [];
	qtdeChequinho: Number;

	constructor(
		private router: Router,
		private chequinhoService: ChequinhoService,
		private associadoService: AssociadoService,
		public snackBar: MatSnackBar,
	) { }

	ngOnInit() {
		this.getAllAssociados();
	}

	getAllAssociados(){
		this.associadoService.findAll().subscribe(a => {
			this.associados = <Associado[]> a;
		}, err => {
			this.openSnackBar("Erro ao listar associados","OK");			
		});
	}
	
	gerarChequinho(){
		this.chequinho.data = new Date();
		for(var i=0; i < this.qtdeChequinho; i+=1){
			this.chequinho.id = null;
			this.chequinhoService.save(this.chequinho).subscribe(chequinho => {
				this.chequinhos.push(chequinho.id);
			}, err => {
				this.openSnackBar("Não foi possível gerar o(s) chequinho(s)", "OK");
				return;
			});
		}
		this.openSnackBar("Chequinho(s) gerado(s) com sucesso", "OK");			
		console.log(this.chequinhos);
		//console.log(this.chequinhos.map(function(item){return item.id;}));
		//this.router.navigate(["chequinhoimpressao", this.chequinhos.map(function(item){return item.id}).join(';') ]);		
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

}