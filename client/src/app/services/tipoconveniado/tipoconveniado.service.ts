import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tipoconveniado } from '../../models/tipoconveniado';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class TipoconveniadoService {

	private apiUrl = environment.api_url;
		constructor(
			private httpClient: HttpClient,
			private authService: AuthService) {
	}
  
  	save(pessoa: Tipoconveniado): Observable<Tipoconveniado> {
		if(pessoa.id)
			return this.httpClient.put<Tipoconveniado>(`${this.apiUrl}tipoconveniado/${pessoa.id}`, pessoa);
		return this.httpClient.post<Tipoconveniado>(`${this.apiUrl}tipoconveniado`, pessoa);
	}

	findByDescricao(descricao: string): Observable<Tipoconveniado> {
		const url = `${this.apiUrl}tipoconveniado?descricao=/${descricao}`;
		return this.httpClient.get<Tipoconveniado>(url);
	}
  
	findAll() : Observable<Tipoconveniado[]> {
		return this.httpClient.get<Tipoconveniado[]>(`${this.apiUrl}tipoconveniado`);
	}

	delete(id: string): Observable<Tipoconveniado> {
		return this.httpClient.delete<Tipoconveniado>(`${this.apiUrl}tipoconveniado/${id}`)
	}
}
