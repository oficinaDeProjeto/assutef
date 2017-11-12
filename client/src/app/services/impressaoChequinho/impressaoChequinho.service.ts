import { Chequinho } from './../../models/chequinho';
import { Associado } from './../../models/associado';
import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImpressaoChequinhoService  {

	private apiUrl = environment.api_url;
	constructor(private httpClient: HttpClient) {
    }
	
    findById(id: string): Observable<Chequinho> {
		return this.httpClient.get<Chequinho>(`${this.apiUrl}chequinho/${id}`);
    }
}
