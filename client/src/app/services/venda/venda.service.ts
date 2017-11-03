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

  findAll() : Observable<Venda[]> {
    return this.httpClient.get<Venda[]>(`${this.apiUrl}venda`);
  }
      
      
   save(venda: Venda): Observable<Venda> {
    return this.httpClient.post<Venda>(`${this.apiUrl}venda`, venda);
  }
}