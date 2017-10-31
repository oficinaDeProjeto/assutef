import { Associado } from './../../models/associado';
import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AssociadoService {

	private apiUrl = environment.api_url;
	constructor(private httpClient: HttpClient) {
	}

	save(pessoa: Associado): Observable<Associado> {
		return this.httpClient.post<Associado>(`${this.apiUrl}associado`, pessoa);
	}

	findByCpf(cpf: string): Observable<Associado> {
		const url = `${this.apiUrl}associado?cpf=/${cpf}`;
		return this.httpClient.get<Associado>(url);
	}

	findAll() : Observable<Associado[]> {
		return this.httpClient.get<Associado[]>(`${this.apiUrl}associado`);
	}

}
