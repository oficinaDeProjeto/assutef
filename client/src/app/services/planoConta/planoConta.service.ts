import { PlanoConta } from './../../models/planoConta';
import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlanoContaService {

	private apiUrl = environment.api_url;
	constructor(private httpClient: HttpClient) {
	}

	findAll() : Observable<PlanoConta[]> {
		return this.httpClient.get<PlanoConta[]>(`${this.apiUrl}planoConta`);
	}

	save(planoConta: PlanoConta): Observable<PlanoConta> {
		if (planoConta.id)
			return this.httpClient.put<PlanoConta>(`${this.apiUrl}planoConta/${planoConta.id}`, planoConta);
		return this.httpClient.post<PlanoConta>(`${this.apiUrl}planoConta`, planoConta);
	}
	
	findByNome(nomeConta: string): Observable<PlanoConta[]> {
		return this.httpClient.get<PlanoConta[]>(`${this.apiUrl}planoConta?nomeConta=${nomeConta}`);
	}
}
