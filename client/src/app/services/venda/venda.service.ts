import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Venda} from './../../models/venda';
 
@Injectable()
export class VendaService {


  private apiUrl = environment.api_url;
  
  constructor(private httpClient: HttpClient) {
  
    }

    
  
  }