import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Contabancaria } from './../../models/contabancaria';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContabancariaService {


	private apiUrl = environment.api_url;
	constructor(private httpClient: HttpClient) {
	}
//método de salvar o contabancaria com o id e retorna o contabancaria
	save(contabancaria: Contabancaria): Observable<Contabancaria> {
		if (contabancaria.id) {
			return this.httpClient.put<Contabancaria>(`${this.apiUrl}contabancaria/${contabancaria.id}`, contabancaria);
		}
		return this.httpClient.post<Contabancaria>(`${this.apiUrl}contabancaria`, contabancaria);
	}
//buscar os contabancaria cadastrados
	findAll() : Observable<Contabancaria[]> {
		return this.httpClient.get<Contabancaria[]>(`${this.apiUrl}contabancaria`);
  }
  //deleta os contabancaria passando como parametro o id
  delete(id:string): Observable<Contabancaria>{
    return this.httpClient.delete<Contabancaria>(`${this.apiUrl}contabancaria/${id}`);
  }

}
