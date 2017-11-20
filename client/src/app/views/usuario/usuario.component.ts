import { UsuarioService } from './../../services/usuario/usuario.service';
import { ModalUsuarioComponent } from './modal/modal-user.component';
import { Usuario } from './../../models/Usuario';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry, MatDialog, MatSnackBar } from "@angular/material";


@Component({
	selector: 'app-usuario',
	templateUrl: './usuario.component.html',
	styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
	usuarios : Usuario[] = [];
	filteredUsuarios: Usuario[] = [];
	selectedUsuario = new Usuario();
	

	ngOnInit() {
		this.getAll();
	}

	
	getAll() {
		this.usuarioService.getAll().subscribe(usuarios => {
			this.usuarios = <Usuario[]>usuarios;
			this.filteredUsuarios = Object.assign([], this.usuarios);
			this.selectedUsuario = this.usuarios[0];
		}, err => {
			console.log(err);
		});
	}
	isDarkTheme = false;

	constructor(
		private usuarioService: UsuarioService,
		private dialog: MatDialog,
		public snackBar: MatSnackBar
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

	openUser(usuario): void{
		let dialogRef = this.dialog.open(ModalUsuarioComponent, {
			data: usuario
		});

		dialogRef.afterClosed().subscribe(result => {
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
			)
		}
	}


	
}
