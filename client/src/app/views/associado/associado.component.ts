import { ConfirmDialogService } from './../../components/common/confirm-dialog/confirm-dialog.service';
import { AssociadoService } from './../../services/associado/associado.service';
import { GenericService } from './../../services/generic/generic.service';
import { AuthService } from './../../services/auth/auth.service';
import { Associado } from './../../models/associado';
import { ModalAssociadoComponent } from './modal/modal-associado.component';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-associado',
	templateUrl: './associado.component.html',
	styleUrls: ['./associado.component.css']
})
export class AssociadoComponent implements OnInit {

	associado: Associado = new Associado();
	associados: Associado[] = [];
	selectedAssociado: Associado = new Associado;
	filteredAssociados: Associado[] = [];

	constructor(
		private genercService: GenericService,
		private associadoService: AssociadoService,
		private router: Router,
		private authService: AuthService,
		public dialog: MatDialog,
		public snackBar: MatSnackBar,
		public confirmDialogService: ConfirmDialogService
	) {
	}

	ngOnInit() {
		this.findAll();
	}

	/**
	 * Busca todos os associados salvos na base de dados.
	 */
	findAll() {
		this.associadoService.findAll().subscribe(associados => {
			this.associados = <Associado[]>associados;
			this.filteredAssociados = Object.assign([], this.associados);
		}, err => {
			this.openSnackBar("Não foi possível carregar associados", "OK");
		});
	}
	
	/**
	 * Filtra na lista de associados per uma consulta.
	 * @param query - texto para pesquisa.
	 */
	filterAssociado(query: string) {
		if (!query) {
			this.filteredAssociados = Object.assign([], this.associados);
		} else {
			this.filteredAssociados = Object.assign([], this.associado).filter(
				associado => associado.descricao.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
		}
	}

	/**
	 * Abre o componente de Dialog para cadastrar e editar associados.
	 * @param associado em caso de edição é o usuário a ser editado.
	 */
	openDialog(associado: Associado) {
		let dialogRef = this.dialog.open(ModalAssociadoComponent, {
			data: associado
		});

		dialogRef.afterClosed().subscribe(result => {
			this.save(result);
		});
	}

	/**
	 * Valida se é mesmo a intenção do usuário, caso sim remove um associado dá base
	 * @param associado associado passado por parametro direto da View
	 */
	delete(associado: Associado) {
		this.confirmDialogService.confirm(
			'Confirmação',
			`Você tem ceteza que deseja remover o associado ${associado.nome}?`)
			.subscribe(res => {
				if (res) {
					this.associadoService.delete(associado.id).subscribe(associado => {
						this.openSnackBar("Removido com sucesso", "OK");
						this.findAll();
					}, err => {
						this.openSnackBar("Não foi possível remover o associado", "OK");
					})
				}
			});
	}

	/**
	 * Salva um novo associado na base de dados
	 * @param associado objeto que representa um novo associado a ser cadastrado.
	 */
	save(associado: Associado) {
		this.associadoService.save(associado).subscribe(associado => {
			this.openSnackBar("Salvo com sucesso", "OK");
			this.findAll();
		}, err => {
			this.openSnackBar("Não foi possível salvar o associado", "OK");
		});
	}

	/**
	 * Abre o serviço de mensagem em tela.
	 * @param message mensagem a ser mostrada.
	 * @param action texto para botão de acção.
	 */
	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}
}
