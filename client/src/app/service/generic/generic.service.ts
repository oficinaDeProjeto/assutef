import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { SuperService } from '../super.service';
import { Observable } from 'rxjs';

@Injectable()
export class GenericService extends SuperService {

	private apiUrl = environment.api_url;

	constructor(private http: Http) {
		super();
	}

	/**
	 * Realiza uma requisição na API, onde vai trazer um endereço 
	 * através de um cep.
	 * @param PostalCode 
	 */
	public getAddressByPostalCode(PostalCode: string): Observable<any> {
		return this.http.get(this.apiUrl + 'general/getAddressByPostalCode?postalcode=' + PostalCode)
			.map(res => {
				return super.extractData(res);
			})
			.catch(super.handleError);
	}

	/**
	 * Busca no API todos os registros a partir de uma tabela.
	 * @param table  
	 */
	public getAll(table: string): Observable<Object[]> {
		return this.http
			.get(this.apiUrl + table)
			.map(res => {
				return super.extractData(res);
			})
			.catch(super.handleError);
	}

	/**
	 * Busca no API todos os registros a partir de uma tabela e um campo.
	 * @param table - tabela que deseja pesquisar os itens.
	 * @param field - campo da tabela utilizado na pesquisa.
	 * @param value - valor a ser pesquisado.
	 */
	public getAllByField(table: string, field: string, value: any): Observable<Object[]> {
		if (value) {
			return this.http
				.get(this.apiUrl + table + '?' + field + '=' + value)
				.map(res => {
					return super.extractData(res);
				})
				.catch(super.handleError);
		} else {
			super.handleError
		}
	}

	/**
	 * Salva de um objeto na base de dados
	 * @param table - tabela qe deseja salvar.
	 * @param object - objeto que deseja salvar.
	 */
	public save(table: string, object: Object): Observable<Object> {
		return this.http.post(this.apiUrl + table, object).map(res => {
			return super.extractData(res);
		}).catch(super.handleError);
	}

}
