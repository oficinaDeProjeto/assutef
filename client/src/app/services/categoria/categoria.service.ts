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
//metodo de salvar
	save(categoria: Categoria): Observable<Categoria> {
		if (categoria.id) {
			return this.httpClient.put<Categoria>(`${this.apiUrl}categoria/${categoria.id}`, categoria);
		}
		return this.httpClient.post<Categoria>(`${this.apiUrl}categoria`, categoria);
	}
//buscar todas as categorias
	findAll() : Observable<Categoria[]> {
		return this.httpClient.get<Categoria[]>(`${this.apiUrl}categoria`);
  }
  //deletar a categoria passando id como parametro
  delete(id:string): Observable<Categoria>{
    return this.httpClient.delete<Categoria>(`${this.apiUrl}categoria/${id}`);
  } 

}
