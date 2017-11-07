import { ModalPlanoContaComponent } from './modal/modal-planoConta.component';
import { PlanoContaService } from './../../services/planoConta/planoConta.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
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
		this.planoContaService.findAll().subscribe(planoContas => {
			this.planoContas = <PlanoConta[]>planoContas;
			this.filteredPlanoConta = Object.assign([], this.planoContas);
		}, err => {
			this.openSnackBar("Não foi possível carregar o Plano de Contas ", "OK");
		});
	}
	
	filterPlanoConta(query) {
		if (!query) {
			this.filteredPlanoConta = Object.assign([], this.planoContas);
		} else {
			this.filteredPlanoConta = Object.assign([], this.planoConta).filter(
				planoConta => planoConta.nomeConta.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
		}
	}
  
  openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
    });
  }

	openDialog(planoConta: PlanoConta): void {
		let dialogRef = this.dialog.open(ModalPlanoContaComponent, {
			data: planoConta
		});

		dialogRef.afterClosed().subscribe(result => {
			this.save(result);
		});
	}

	save(planoConta: PlanoConta) {
		this.planoContaService.save(planoConta).subscribe(planoConta => {
			this.openSnackBar("Salvo com sucesso", "OK");
			this.findAll();
		}, err => {
			this.openSnackBar("Não foi possível salvar a Conta", "OK");
		});
	}

	newPlanoConta() {
		this.selectedPlanoConta = new PlanoConta();
	}

	assignCopy() {
		this.filteredPlanoConta = Object.assign([], this.planoConta);
	}

}
