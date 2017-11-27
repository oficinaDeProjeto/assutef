import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Banco } from '../../models/banco';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class BancoService {

  private apiUrl = environment.api_url;
	constructor(private httpClient: HttpClient,	
		private authService: AuthService) {
	}

	save(banco: Banco): Observable<Banco> {
		if(banco.id)
			return this.httpClient.put<Banco>(`${this.apiUrl}banco/${banco.id}`, banco);
			
  	return this.httpClient.post<Banco>(`${this.apiUrl}banco`, banco);
	}

	findAll() : Observable<Banco[]> {
		return this.httpClient.get<Banco[]>(`${this.apiUrl}banco`);
  }

  findByDescricao(descricao: string): Observable<Banco> {
		const url = `${this.apiUrl}banco?descricao=/${descricao}`;
		return this.httpClient.get<Banco>(url);
	}
  
  delete(id:string): Observable<Banco>{
    return this.httpClient.delete<Banco>(`${this.apiUrl}banco/${id}`);
  } 
}
