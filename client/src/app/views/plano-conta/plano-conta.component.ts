import { ConfirmDialogService } from './../../components/common/confirm-dialog/confirm-dialog.service';
import { ModalPlanoContaComponent } from './modal/modal-planoConta.component';
import { PlanoContaService } from './../../services/planoConta/planoConta.service';
import { MatDialog, MatSnackBar, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { PlanoConta } from './../../models/planoConta';
import { Component, OnInit, ViewChild } from '@angular/core';

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
	fPlanoContas: PlanoConta[] = [];

	@ViewChild(MatPaginator) paginator: MatPaginator;

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
			console.log(err);
			this.openSnackBar("Não foi possível carregar o Plano de Contas ", "OK");
		});
	}
	
	filterPlanoConta(query) {
		if (!query) {
			this.filteredPlanoConta = Object.assign([], this.planoContas);
		} else {
			this.filteredPlanoConta = Object.assign([], this.planoContas).filter(
				p => p.nomeConta.toLowerCase().indexOf(query.toLowerCase()) > -1
			);
		}
	}

	openSnackBar(message: string, action: string) {
			this.snackBar.open(message, action, {
				duration: 10000,
		});
	}

	openDialog(planoconta: PlanoConta): void {
		let dialogRef = this.dialog.open(ModalPlanoContaComponent, {
			data: planoconta 
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
			this.save(result);
		});
	}

	save(planoConta: PlanoConta) {
		this.planoContaService.save(planoConta).subscribe(planoConta => {
			this.openSnackBar("Salvo com sucesso", "OK");
			this.findAll();
		}, err => {
			console.log(err);
			this.openSnackBar("Não foi possível salvar o plano de contas", "OK");
		});
	}

	newPlanoConta() {
		this.selectedPlanoConta = new PlanoConta();
	}

	assignCopy() {
		this.filteredPlanoConta = Object.assign([], this.planoConta);
	}

}
