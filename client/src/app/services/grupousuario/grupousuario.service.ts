import { Grupousuario } from './../../models/Grupousuario';
import { Injectable } from '@angular/core';
import { SuperService } from '../super.service';
import { environment } from '../../../environments/environment';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GrupousuarioService extends SuperService {
  private apiUrl = environment.api_url;

  constructor(private httpClient: HttpClient) {
    super();
   }

   save(grupousuario: Grupousuario): Observable<Grupousuario> {
		return this.httpClient.post<Grupousuario>(`${this.apiUrl}grupousuario`, grupousuario);
	}

   getAll(): Observable<Grupousuario[]> {
    return this.httpClient.get<Grupousuario[]>(`${this.apiUrl}grupousuario`);
}

delete(id: string): Observable<Grupousuario> {
  return this.httpClient.delete<Grupousuario>(`${this.apiUrl}grupousuario/${id}`)
}
}
