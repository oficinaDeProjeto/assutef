import { Injectable } from '@angular/core';
import { SuperService } from '../super.service';
import { environment } from '../../../environments/environment';
import {Observable} from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import {Usuario} from "../../models/Usuario";

@Injectable()
export class UsuarioService extends SuperService {

    private apiUrl = environment.api_url;

    constructor(private httpClient: HttpClient) {
        super();
    }

    getUsuarioLogged(): Observable<Usuario> {
        return this.httpClient.get<Usuario>(this.apiUrl + 'auth/getusuariobytoken');
    }

    // updateSenha(senha: string, novaSenha: string): Observable<Boolean> {
    //     const url = `${this.apiUrl}/usuario/updatePassword?senha=${senha}&novaSenha=${novaSenha}`;
    //     return this.httpClient.get<Boolean>(url);
    // }

}
