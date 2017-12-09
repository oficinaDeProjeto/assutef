import { Chequinho } from './../../models/chequinho';
import { GenericService } from './../../services/generic/generic.service';
import { Component, OnInit} from '@angular/core';
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
	qtdeChequinho: number;


	constructor(
		private router: Router,
		private chequinhoService: ChequinhoService,
		private associadoService: AssociadoService,
		public snackBar: MatSnackBar
	) {

	 }

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
		//A variavel de valor serve para saber se o valor requisitado dos chequinhos ultrapassa o limite disponível do associado
		var valo = this.chequinho.valorLimite * this.qtdeChequinho;
		if(valo <= 500){		//Não há campo para valor limite no associado ainda
			this.chequinho.data = new Date();
			if(this.chequinho.numero == null){ //Apenas enquanto não usarmos o postgres
				this.chequinho.numero = 1;
			}			
			for(let i=0; i < this.qtdeChequinho; i+=1){
				this.chequinho.numero += 1; //Incrementa o número
				this.chequinhoService.save(this.chequinho).subscribe(chequinho => {				
					this.chequinhos.push(chequinho.id);
					console.log(this.chequinhos);
					if(this.chequinhos.length === this.qtdeChequinho){					
						this.router.navigate(["chequinhoimpressao", this.chequinhos.join('~') ]); //"Split ao contrário" para concatenar os códigos
					}
			
				}, err => {
					this.openSnackBar("Não foi possível gerar o(s) chequinho(s)", "OK");
					return;
				});
			}
		}else{
			this.openSnackBar("O valor limite disponível do associado é menor do que o valor requisitado para os chequinhos", "OK");
			return;
		}
				
	}
	limparCampos(){
		this.qtdeChequinho = 0;
		this.chequinho.associado = null;
		this.chequinho.valorLimite = 0;
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

}