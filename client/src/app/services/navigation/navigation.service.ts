import { Injectable } from '@angular/core';
import { SuperService } from '../super.service';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';

@Injectable()
export class NavigationService extends SuperService {


	menuItens = [
		{ link: "usuario", icon: "account_circle", desc: "Usuários", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "home", icon: "dashboard", desc: "Dashboard", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "categoria", icon: "assignment_turned_in", desc: "Categoria", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "chequinho", icon: "chrome_reader_mode", desc: "Chequinhos", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "home", icon: "supervisor_account", desc: "Teste", permicoes: ['ADMIN', 'CLIENT'] },
<<<<<<< HEAD
		{ link: "associado", icon: "accessibility", desc: "Associado", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "plano-conta", icon: "accessibility", desc: "Plano de Contas", permicoes: ['ADMIN', 'CLIENT'] },
=======
		{ link: "associado", icon: "face", desc: "Associado", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "conveniado", icon: "store", desc: "Conveniados", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "lancamento", icon: "accessibility", desc: "Lançamentos", permicoes: ['ADMIN', 'CLIENT'] },
>>>>>>> upstream/master
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
