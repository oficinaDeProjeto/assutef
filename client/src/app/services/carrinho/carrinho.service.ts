import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Carrinho } from './../../models/carrinho';

@Injectable()
export class CarrinhoService {

  private apiUrl = environment.api_url;
	constructor(private httpClient: HttpClient) {
	}

	save(carrinho: Carrinho): Observable<Carrinho> {
		return this.httpClient.post<Carrinho>(`${this.apiUrl}carrinho`, carrinho);
	}
	

/*	findAll() : Observable<CarrinhoService[]> {
		return this.httpClient.get<Carrinho[]>(`${this.apiUrl}carrinho`);
	}*/

	findByProduto(produto: string): Observable<Carrinho[]> {
		return this.httpClient.get<Carrinho[]>(`${this.apiUrl}carrinho?produto=${produto}`);
	}

	findByData(data: string): Observable<Carrinho[]> {
		return this.httpClient.get<Carrinho[]>(`${this.apiUrl}carrinho?data=${data}`);
	}

	getAll(): Observable<Carrinho[]> {
        return this.httpClient.get<Carrinho[]>(`${this.apiUrl}carrinho`);
    }

}
