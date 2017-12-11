import { PlanoConta } from './../../models/planoConta';
import { PlanoContaService } from './../../services/planoConta/planoConta.service';
import { ContaService } from './../../services/conta/conta.service';
import { Conta } from './../../models/conta';
import { GenericService } from './../../services/generic/generic.service';
import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
	selector: 'app-conta',
	templateUrl: './conta.component.html',
	styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {
	planoContas: PlanoConta[] = [];	
	conta: Conta = new Conta();

	filteredContasC: PlanoConta[] = [];
	filteredContasD: PlanoConta[] = [];

	constructor(
		private router: Router,
		private contaService: ContaService,
		private planoContaService: PlanoContaService,
		public snackBar: MatSnackBar
	) {

	 }

	ngOnInit() {
		this.getAllPlanoContas();
	}

	getAllPlanoContas(){
		this.planoContaService.findAll().subscribe(a => {
			this.planoContas = <PlanoConta[]> a;
		}, err => {
			this.openSnackBar("Erro ao listar o Plano de Contas ","OK");			
		});
	}
	
	gerarConta(){		
		this.contaService.save(this.conta).subscribe(conta => {				
			this.openSnackBar("Salvo com sucesso", "OK");
		}, err => {
			console.log(err);
			this.openSnackBar("Não foi possível salvar a conta", "OK");
		});
	}	

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}


	filterPlanoConta(query) {
		if (!query) {
			// this.filteredContaTodos = Object.assign([], this.planoContas);
		} else if (query === 'C') {
			this.filteredContasC = Object.assign([], this.planoContas).filter(
				planoConta => planoConta.natureza.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
		}else if (query === 'D') {
			this.filteredContasD = Object.assign([], this.planoContas).filter(
				planoConta => planoConta.natureza.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
			
		}
	}
}