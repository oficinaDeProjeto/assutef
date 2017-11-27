import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Conveniado } from '../../models/conveniado';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ConveniadoService {

  private apiUrl = environment.api_url;
	constructor(
		private httpClient: HttpClient,	
		private authService: AuthService) {
  }
  
  	save(pessoa: Conveniado): Observable<Conveniado> {
		if(pessoa.id)
			return this.httpClient.put<Conveniado>(`${this.apiUrl}conveniado/${pessoa.id}`, pessoa);
		return this.httpClient.post<Conveniado>(`${this.apiUrl}conveniado`, pessoa);
	}

	findByCnpj(cnpj: string): Observable<Conveniado> {
		const url = `${this.apiUrl}conveniado?cnpj=/${cnpj}`;
		return this.httpClient.get<Conveniado>(url);
	}

	findByRazaoSocial(razaosocial: string): Observable<Conveniado> {
		const url = `${this.apiUrl}conveniado?cnpj=/${razaosocial}`;
		return this.httpClient.get<Conveniado>(url);
	}

	findAll() : Observable<Conveniado[]> {
		return this.httpClient.get<Conveniado[]>(`${this.apiUrl}conveniado`);
	}

	delete(id: string): Observable<Conveniado> {
		return this.httpClient.delete<Conveniado>(`${this.apiUrl}conveniado/${id}`)
	}
}
