import { PlanoContaService } from './../../services/planoConta/planoConta.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { GenericService } from './../../services/generic/generic.service';
import { PlanoConta } from './../../models/planoConta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plano-conta',
  templateUrl: './plano-conta.component.html',
  styleUrls: ['./plano-conta.component.css']
})
export class PlanoContaComponent implements OnInit {

  planoConta: PlanoConta = new PlanoConta();
	planoContas: PlanoConta[] = [];
	selectedPlanoConta: PlanoConta = new PlanoConta;
	filteredPlanoConta: PlanoConta[] = [];

	constructor(
		private genercService: GenericService,
		private planoContaService: PlanoContaService,
		private router: Router,
		private authService: AuthService,
		public dialog: MatDialog,
		public snackBar: MatSnackBar
	) {
	}

	ngOnInit() {
		this.findAll();
	}


	findAll() {
		this.planoContaService.findAll().subscribe(associados => {
			this.planoContas = <PlanoConta[]>associados;
			this.filteredPlanoConta = Object.assign([], this.planoContas);
		}, err => {
			this.openSnackBar("Não foi possível carregar o Plano de Contas ", "OK");
		});
  }
  
  openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
    });
  }

}
