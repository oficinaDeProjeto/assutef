import { Lancamento } from './../../models/lancamento';
import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LancamentoService {
	
  private apiUrl = environment.api_url;
	constructor(private httpClient: HttpClient) {
	}

	save(lancamento: Lancamento): Observable<Lancamento> {		
		return this.httpClient.post<Lancamento>(`${this.apiUrl}lancamento`, lancamento);
	}
	

	findAll() : Observable<Lancamento[]> {
		return this.httpClient.get<Lancamento[]>(`${this.apiUrl}lancamento`);
	}
	
	delete(id: string): Observable<Lancamento> {
		return this.httpClient.delete<Lancamento>(`${this.apiUrl}lancamento/${id}`)
	}

	findById(id: string): Observable<Lancamento> {
		return this.httpClient.get<Lancamento>(`${this.apiUrl}lancamento?id=${id}`);
	}


}
