import { UsuarioService } from './../../services/usuario/usuario.service';
import { ModalUsuarioComponent } from './modal/modal-user.component';
import { Usuario } from './../../models/Usuario';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry, MatDialog } from "@angular/material";


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
		iconRegistry: MatIconRegistry, 
		sanitizer: DomSanitizer, 
		private usuarioService: UsuarioService,
		private dialog: MatDialog
	) {
		// To avoid XSS attacks, the URL needs to be trusted from inside of your application.
		const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');
		iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
	}

	openNewUsuarioDialog(): void {
		let dialogRef = this.dialog.open(ModalUsuarioComponent, {
			data: null
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
			//this.salvarCategoria(result);
		});
	}


	
}
