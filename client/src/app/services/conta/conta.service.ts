import { Conta } from './../../models/conta';
import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContaService {

	private apiUrl = environment.api_url;
	constructor(private httpClient: HttpClient) {
	}

	save(conta: Conta): Observable<Conta> {		
		return this.httpClient.post<Conta>(`${this.apiUrl}conta`, conta);
	}

	findAll() : Observable<Conta[]> {
		return this.httpClient.get<Conta[]>(`${this.apiUrl}conta`);
	}

	findById(id: string): Observable<Conta> {
		return this.httpClient.get<Conta>(`${this.apiUrl}conta/${id}`);
    }
	

}
