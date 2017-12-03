import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Produto } from './../../models/produto';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProdutoService {

  
	private apiUrl = environment.api_url;
	constructor(private httpClient: HttpClient) {
	}

	save(produto: Produto): Observable<Produto> {
		return this.httpClient.post<Produto>(`${this.apiUrl}produto`, produto);
	}

	findAll() : Observable<Produto[]> {
		return this.httpClient.get<Produto[]>(`${this.apiUrl}produto`);
  }
  
  delete(id:string): Observable<Produto>{
    return this.httpClient.delete<Produto>(`${this.apiUrl}produto/${id}`);
  } 

}
