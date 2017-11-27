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
		{ link: "produto", icon: "assignment", desc: "Produto", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "chequinho", icon: "chrome_reader_mode", desc: "Chequinhos", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "home", icon: "supervisor_account", desc: "Teste", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "associado", icon: "store", desc: "Associado", permicoes: ['ADMIN', 'CLIENT'] },		
		{ link: "tipoconveniado", icon: "account_balance_wallet", desc: "Tipo Conveniado", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "conveniado", icon: "local_grocery_store", desc: "Conveniado", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "lancamento", icon: "compare_arrows", desc: "Lançamentos", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "painel", icon: "compare_arrows", desc: "Painel", permicoes: ['ADMIN', 'CLIENT'] },
		{ link: "grupousuario", icon: "supervisor_account", desc: "Grupo de Usuários", permicoes: ['ADMIN', 'CLIENT'] },
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
