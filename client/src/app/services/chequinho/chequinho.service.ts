import { Chequinho } from './../../models/chequinho';
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
		return this.httpClient.post<Chequinho>(`${this.apiUrl}chequinho`, chequinho);
	}
	

	findAll() : Observable<Chequinho[]> {
		return this.httpClient.get<Chequinho[]>(`${this.apiUrl}chequinho`);
	}

	

}
