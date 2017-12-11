import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Remessabancaria } from './../../models/remessabancaria';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RemessabancariaService {


	private apiUrl = environment.api_url;
	constructor(private httpClient: HttpClient) {
	}
//método de salvar o remessabancaria com o id e retorna o remessabancaria
	save(remessabancaria: Remessabancaria): Observable<Remessabancaria> {
		if (remessabancaria.id) {
			return this.httpClient.put<Remessabancaria>(`${this.apiUrl}remessabancaria/${remessabancaria.id}`, remessabancaria);
		}
		return this.httpClient.post<Remessabancaria>(`${this.apiUrl}remessabancaria`, remessabancaria);
	}
//buscar os remessabancaria cadastrados
	findAll() : Observable<Remessabancaria[]> {
		return this.httpClient.get<Remessabancaria[]>(`${this.apiUrl}remessabancaria`);
  }
  //deleta os remessabancaria passando como parametro o id
  delete(id:string): Observable<Remessabancaria>{
    return this.httpClient.delete<Remessabancaria>(`${this.apiUrl}remessabancaria/${id}`);
  }

}
