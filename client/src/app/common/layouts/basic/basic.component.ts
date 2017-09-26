import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/service/auth/auth.service";
import { User } from "app/models/user";

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
		{ link: "categoria", icon: "assignment_turned_in", desc: "Categoria" },
		{ link: "home", icon: "supervisor_account", desc: "Chequinhos" },
		{ link: "home", icon: "supervisor_account", desc: "Teste" },
	];
	constructor(private router: Router, private authService: AuthService) {
	}
	
	ngOnInit() {
		this.authService.getUserByToken().subscribe(user => {
			this.currentUser = <User>user; 
		}, err => {
			this.router.navigate(['/login']);
		})
	}



	activeRoute(routename: string): boolean {
		return this.router.url.indexOf(routename) > -1;
	}

}
