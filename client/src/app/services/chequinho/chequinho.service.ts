import { Chequinho } from './../../models/chequinho';
import { Associado } from './../../models/associado';
import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChequinhoService {

	private apiUrl = environment.api_url;
	constructor(private httpClient: HttpClient) {
	}

	save(chequinho: Chequinho): Observable<Chequinho> {		
		
		if(chequinho.id){
			return this.httpClient.put<Chequinho>(`${this.apiUrl}chequinho/${chequinho.id}`, chequinho);
		}
		return this.httpClient.post<Chequinho>(`${this.apiUrl}chequinho`, chequinho);
	}


	findAll() : Observable<Chequinho[]> {
		return this.httpClient.get<Chequinho[]>(`${this.apiUrl}chequinho`);
	}

	findById(id: string): Observable<Chequinho> {
		return this.httpClient.get<Chequinho>(`${this.apiUrl}chequinho/${id}`);
	}
	
	findLastResultsByAssociado(id: number) : Observable<Chequinho[]> {
		return this.httpClient.get<Chequinho[]>(`${this.apiUrl}chequinho?associado=${id}&sort=data DESC&limit=10`);
	}

	findTotalChequinhoByAssociado(id: number) : Observable<any>{
		return this.httpClient.get<any>(`${this.apiUrl}chequinho/findTotalChequinhoByAssociado?associado=${id}`);
	}

	findByAssociado(id: number): Observable<Chequinho[]>{
		return this.httpClient.get<Chequinho[]>(`${this.apiUrl}chequinho/findByAssociado?associado=${id}`);
	}

}
