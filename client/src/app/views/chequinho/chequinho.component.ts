import { Chequinho } from './../../models/chequinho';
import { GenericService } from './../../services/generic/generic.service';
import { Component, OnInit } from '@angular/core';
import { ChequinhoService } from '../../services/chequinho/chequinho.service';
import { Associado } from '../../models/associado';
import { AssociadoService } from '../../services/associado/associado.service';

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
		private associadoService: AssociadoService
	) { }

	ngOnInit() {
		this.getAllAssociados();
	}

	getAllAssociados(){
		this.associadoService.findAll().subscribe(a => {
			this.associados = <Associado[]> a;
		}, err => {
			console.log("Erro ao listar associados");			
		});
	}
	
	gerarChequinho(){
		this.chequinho.data = new Date();
		this.chequinhoService.save(this.chequinho).subscribe(chequinho => {
			console.log("Chequinhos gerados com sussesso");
			
		}, err => {
			console.log("Erro ao gerar chequinhos");			
		});
	
	}

}
