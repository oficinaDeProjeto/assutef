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
//método de salvar o produto com o id e retorna o produto
	save(produto: Produto): Observable<Produto> {
		if (produto.id) {
			return this.httpClient.put<Produto>(`${this.apiUrl}produto/${produto.id}`, produto);
		}
		return this.httpClient.post<Produto>(`${this.apiUrl}produto`, produto);
	}
//buscar os produtos cadastrados
	findAll() : Observable<Produto[]> {
		return this.httpClient.get<Produto[]>(`${this.apiUrl}produto`);
  }
  //deleta os produtos passando como parametro o id
  delete(id:string): Observable<Produto>{
    return this.httpClient.delete<Produto>(`${this.apiUrl}produto/${id}`);
  } 

}
