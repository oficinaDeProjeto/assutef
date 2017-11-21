import { UsuarioService } from './../../services/usuario/usuario.service';
import { ModalUsuarioComponent } from './modal/modal-user.component';
import { Usuario } from './../../models/Usuario';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry, MatDialog, MatSnackBar, MatPaginator } from "@angular/material";
import { ConfirmDialogService } from '../../components/common/confirm-dialog/confirm-dialog.service';


@Component({
	selector: 'app-usuario',
	templateUrl: './usuario.component.html',
	styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
	usuarios : Usuario[] = [];
	filteredUsuarios: Usuario[] = [];
	finalUsers: Usuario[] = [];

	


	@ViewChild(MatPaginator) paginator: MatPaginator;
	

	ngOnInit() {
		this.getAll();
	}

	
	getAll() {
		this.usuarioService.getAll().subscribe(usuarios => {
			this.usuarios = <Usuario[]>usuarios;
			this.filteredUsuarios = Object.assign([], this.usuarios);
			this.filterUsuario("");
		}, err => {
			console.log(err);
		});
	}
	isDarkTheme = false;

	constructor(
		private usuarioService: UsuarioService,
		private dialog: MatDialog,
		public snackBar: MatSnackBar,
		public confirmDialogService: ConfirmDialogService
	) {
	}
	
	save(usuario): void {
		usuario.role = "ADMIN";
		this.usuarioService.save(usuario).subscribe(usuario => {
			this.openSnackBar("Salvo com sucesso", "OK");
			this.getAll();
		}, err => {
			this.openSnackBar("Não foi possível salvar o usuario", "OK");
		});
	}

	delete(usuario): void{
		this.confirmDialogService.confirm(
			'Confirmação',
			`Você tem ceteza que deseja remover o usuario ${usuario.nome}?`)
			.subscribe(res => {
				if (res) {
					this.usuarioService.delete(usuario.id).subscribe(u => {
						this.openSnackBar("Removido com sucesso", "OK");
						this.getAll();
					}, err => {
						this.openSnackBar("Não foi possível remover o associado", "OK");
					})
				}
			});
	}

	openUser(usuario): void{
		let dialogRef = this.dialog.open(ModalUsuarioComponent, {
			data: usuario
		});

		dialogRef.afterClosed().subscribe(result => {
			if(typeof result !== 'undefined')
				this.save(result);
		});
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

	filterUsuario(query) {
		if (!query) {
			this.filteredUsuarios = Object.assign([], this.usuarios);
		} else {
			this.filteredUsuarios = Object.assign([], this.usuarios).filter(
				u => u.nome.toLowerCase().indexOf(query.toLowerCase()) > -1 || u.email.toLowerCase().indexOf(query.toLowerCase()) > -1
			);
		}
		this.finalUsers = this.filteredUsuarios.slice(0, Math.min(this.filteredUsuarios.length, this.paginator.pageSize));
	}

	onPaginateChange(event):void{
		let startIndex = event.pageIndex * event.pageSize;
		let endIndex = Math.min(startIndex + this.paginator.pageSize, this.filteredUsuarios.length);
		this.finalUsers = this.filteredUsuarios.slice(startIndex, endIndex);
		
	 }


	
}
