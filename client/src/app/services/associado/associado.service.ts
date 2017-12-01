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
	
	/**
	 * Salva um novo associado.
	 * @param associado objeto que representa o associado para ser salvo
	 */
	save(associado: Associado): Observable<Associado> {
		if (associado.id)
			return this.httpClient.put<Associado>(`${this.apiUrl}associado/${associado.id}`, associado);
		return this.httpClient.post<Associado>(`${this.apiUrl}associado`, associado);
	}

	/**
	 * Pesquisa associados por cpf.
	 * @param cpf cpf para pesquisa.
	 */
	findByCpf(cpf: string): Observable<Associado[]> {
		return this.httpClient.get<Associado[]>(`${this.apiUrl}associado?cpf=${cpf}`);
	}

	/**
	 * Pesquisa por todos os associados.
	 */
	findAll() : Observable<Associado[]> {
		return this.httpClient.get<Associado[]>(`${this.apiUrl}associado`);
	}

	/**
	 * Pesquisa associados por email
	 * @param email email para pesquisa
	 */
	findByEmail(email: string): Observable<Associado[]> {
		return this.httpClient.get<Associado[]>(`${this.apiUrl}associado?email=${email}`);
	}

	/**
	 * Remove o associado da base de dados.
	 * @param id 
	 */
	delete(id: string): Observable<Associado> {
		return this.httpClient.delete<Associado>(`${this.apiUrl}associado/${id}`)
	}
	
	getPreAssociadoByToken(token:string): Observable<Associado> {
        return this.httpClient.get<Associado>(`${this.apiUrl}associado/getPreAssociadoByToken?token=${token}`);
    }
}
