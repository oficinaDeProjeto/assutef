import { Router } from '@angular/router';
import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-basic',
	templateUrl: './basic.component.html',
	styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
	public currentUser: User;
	menuItens = [
		{ link: "user", icon: "supervisor_account", desc: "Usuários" },
		{ link: "home", icon: "supervisor_account", desc: "Dashboars" },
		{ link: "home", icon: "supervisor_account", desc: "Relatórios" },
		{ link: "home", icon: "supervisor_account", desc: "Chequinhos" },
		{ link: "home", icon: "supervisor_account", desc: "Teste" },
	];
	ngOnInit() {
		let localUser = JSON.parse(localStorage.getItem('currentUser'));
		if (localUser) {
			this.currentUser = JSON.parse(localStorage.getItem('currentUser')).user;
		} else {
			this.router.navigate(['/login']);
		}
	}


	constructor(private router: Router) {
	}

	activeRoute(routename: string): boolean {
		return this.router.url.indexOf(routename) > -1;
	}

}
