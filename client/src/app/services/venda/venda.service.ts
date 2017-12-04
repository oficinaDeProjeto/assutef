import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Venda} from './../../models/venda';
import { SuperService } from '../super.service';

@Injectable()
export class VendaService extends SuperService {

  private apiUrl = environment.api_url;
  
  constructor(private httpClient: HttpClient) {
    super();
  }

  delete(id: string): Observable<Venda>{
    return this.httpClient.delete<Venda>(`${this.apiUrl}venda/${id}`);
  }

  findAll(): Observable<Venda[]> {
    return this.httpClient.get<Venda[]>(`${this.apiUrl}venda`);
  }

  findByData(data: string): Observable<Venda[]> {
    return this.httpClient.get<Venda[]>(`${this.apiUrl}venda?data=${data}`);
  }

  save(venda: Venda): Observable<Venda> {
     if (venda.id) {
       return this.httpClient.put<Venda>(`${this.apiUrl}venda/${venda.id}`, venda);
     }
    return this.httpClient.post<Venda>(`${this.apiUrl}venda`, venda);
  }
}