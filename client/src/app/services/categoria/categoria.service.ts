import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../../models/categoria';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoriaService {

  
	private apiUrl = environment.api_url;
	constructor(private httpClient: HttpClient) {
	}

	save(categoria: Categoria): Observable<Categoria> {
		return this.httpClient.post<Categoria>(`${this.apiUrl}categoria`, categoria);
	}

	findAll() : Observable<Categoria[]> {
		return this.httpClient.get<Categoria[]>(`${this.apiUrl}categoria`);
  }
  
  delete(id:string): Observable<Categoria>{
    return this.httpClient.delete<Categoria>(`${this.apiUrl}categoria/${id}`);
  } 

}
