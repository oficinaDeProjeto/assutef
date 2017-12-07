import { Conveniado } from './../../models/conveniado';
import { Observable } from 'rxjs/Observable';
import { Lancamento } from './../../models/lancamento';
import { Chequinho } from './../../models/chequinho';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable()
export class PainelService{
    
    private apiUrl = environment.api_url;
	constructor(private httpClient: HttpClient) {
    }
    
    findAllChequinhos() : Observable<Chequinho[]>{//listando a coleção de dados de chequinho
        return this.httpClient.get<Chequinho[]>(`${this.apiUrl}chequinho`);
    }

    findAllLancamentos() : Observable<Lancamento[]>{ //listando a coleção de dados de lançamento
        return this.httpClient.get<Lancamento[]>(`${this.apiUrl}lancamento`)
    }

    /*findAllConveniados(): Observable<Conveniado[]>{
        return this.httpClient.get<Conveniado[]>(`${this.apiUrl}conveniado`);
    }*/
}
 /*listagem dos chequinhos
 observable = coleção de dados unidirecional, que notifica sempre que um item/objeto sofre mudanças
 this.httpClient = objetos que serão retornados para o navegador, cuja os quais foram solicitados por uma requisição - API Simplificada p/ com. HTTP.
 apiUrl = classe para resposta da solicitação - get Lancamento.
 */