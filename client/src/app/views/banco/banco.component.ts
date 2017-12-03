import { Component, OnInit } from '@angular/core';
import { Banco } from '../../models/banco';
import { GenericService } from '../../services/generic/generic.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmDialogService } from '../../components/common/confirm-dialog/confirm-dialog.service';
import { BancoService } from '../../services/banco/banco.service';
import { ModalBancoComponent } from './modal/modal-banco.component';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {

  banco: Banco = new Banco();
	bancos: Banco[] = [];
	selectedBanco: Banco = new Banco;
	filteredBancos: Banco[] = [];

  constructor(
    private genercService: GenericService,
		private router: Router,
		private authService: AuthService,
		public dialog: MatDialog,
		public confirmDialogService: ConfirmDialogService,
		public snackBar: MatSnackBar,
		private bancoService: BancoService
  ) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
		this.bancoService.findAll().subscribe(bancos => {
			this.bancos = <Banco[]>bancos;
			this.filteredBancos = Object.assign([], this.bancos);
		}, err => {
			this.openSnackBar("Não foi possível carregar ", "OK");
		});
	}

	salvarBanco(banco: Banco) {
		this.bancoService.save(banco).subscribe(banco => {
			console.log('Salvo com sucesso');
			this.findAll();
		}, err => {
			console.log(err);
		});
	}

	newBanco() {
		this.selectedBanco = new Banco();
	}

	assignCopy() {
		this.filteredBancos = Object.assign([], this.banco);
	}

	filterBanco(query) {
		if (!query) {
			this.filteredBancos = Object.assign([], this.bancos);
		} else {
			this.filteredBancos = Object.assign([], this.bancos).filter(
				banco => banco.descricao.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
		}
	}

	openDialog(banco: Banco): void {
		let dialogRef = this.dialog.open(ModalBancoComponent, {
			data: banco
		});

		dialogRef.afterClosed().subscribe(result => {
			this.save(result);
		});
	}

	delete(banco: Banco) {
		this.confirmDialogService.confirm(
			'Confirmação',
			`Você tem ceteza que deseja remover ${banco.descricao}?`)
			.subscribe(res => {
				if (res) {
					this.bancoService.delete(banco.id).subscribe(banco => {
						this.openSnackBar("Removido com sucesso", "OK");
						this.findAll();
					}, err => {
						this.openSnackBar("Não foi possível remover ", "OK");
					})
				}
			});
	}

	save(banco: Banco) {
		this.bancoService.save(banco).subscribe(banco => {
			this.openSnackBar("Salvo com sucesso", "OK");
			this.findAll();
		}, err => {
			this.openSnackBar("Não foi possível salvar ", "OK");
		});
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

}
