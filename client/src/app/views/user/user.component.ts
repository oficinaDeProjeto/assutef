import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry, MdDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { ModalUserComponent } from 'app/views/user/modal/modal-user/modal-user.component';
import { AuthService } from 'app/service/auth/auth.service';
import { Router } from '@angular/router';
import { GenericService } from 'app/service/generic/generic.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


	usuarios : User[] = [];
	filteredUsuarios: User[] = [];
	selectedUser = new User();

	ngOnInit() {
		this.getAll();
	}

	
	getAll() {
		this.genercService.getAll('user').subscribe(usuarios => {
			this.usuarios = <User[]>usuarios;
			this.filteredUsuarios = Object.assign([], this.usuarios);
			this.selectedUser = this.usuarios[0];
		}, err => {
			console.log(err);
		});
	}
	isDarkTheme = false;

	constructor(
		iconRegistry: MdIconRegistry, 
		sanitizer: DomSanitizer, 
		private genercService: GenericService,
		private router: Router,
		private authService: AuthService,
		public dialog: MdDialog
	) {
		// To avoid XSS attacks, the URL needs to be trusted from inside of your application.
		const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');

		iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
	}

	openNewUserDialog(): void {
		let dialogRef = this.dialog.open(ModalUserComponent, {
			data: null
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
			//this.salvarCategoria(result);
		});
	}

	
}
