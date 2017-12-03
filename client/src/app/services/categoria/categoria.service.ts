import { Categoria } from './../../models/categoria';
import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriaService {
  
	private apiUrl = environment.api_url;
	constructor(private httpClient: HttpClient) {
	}

	save(categoria: Categoria): Observable<Categoria> {
		if (categoria.id) {
			return this.httpClient.put<Categoria>(`${this.apiUrl}categoria/${categoria.id}`, categoria);
		}
		return this.httpClient.post<Categoria>(`${this.apiUrl}categoria`, categoria);
	}

	findAll() : Observable<Categoria[]> {
		return this.httpClient.get<Categoria[]>(`${this.apiUrl}categoria`);
  }
  
  delete(id:string): Observable<Categoria>{
    return this.httpClient.delete<Categoria>(`${this.apiUrl}categoria/${id}`);
  } 

}
