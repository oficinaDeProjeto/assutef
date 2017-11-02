import { Injectable } from '@angular/core';
import { SuperService } from '../super.service';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';

@Injectable()
export class NavigationService extends SuperService {


	menuItens = [
		{ link: "usuario", icon: "face", desc: "Usuários", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "home", icon: "dashboard", desc: "Dashboard", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "categoria", icon: "assignment_turned_in", desc: "Categoria", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "chequinho", icon: "chrome_reader_mode", desc: "Chequinhos", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "home", icon: "supervisor_account", desc: "Teste", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "associado", icon: "store", desc: "Associado", permicoes: ['ADMIN', 'CLIENT'] },
	];

	private apiUrl = environment.api_url;

	constructor(private http: Http) {
		super();
	}

	filterMenuByRole(role: string): any {
		return this.menuItens.filter(i => {
			if (i.permicoes.indexOf(role) > -1) {
				return i;
			}
		});
	}
}
