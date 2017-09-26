import { User } from './../../models/user';
import { SuperService } from './../super.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment } from './../../../environments/environment.prod';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService extends SuperService {
	public token: string;
	private headers = new Headers({ 'Content-type': 'application/json' })
	private apiUrl = environment.api_url;

	constructor(private http: Http) {
		super();
		var token = localStorage.getItem('token');
	}

	public login(email: string, password: string): Observable<boolean> {
		return this.http.post(this.apiUrl + 'auth', JSON.stringify({ email: email, password: password }))
			.map((response: Response) => {
				let token = response.json() && response.json().token;
				let user = response.json() && response.json().user;
				if (token) {
					this.token = token;
					localStorage.setItem('token', token);
					return true;
				} else {
					return false;
				}
			}).catch( super.handleError);
	}

	public logout(): void {
		this.token = null;
		localStorage.removeItem('token');
	}


	public getUserByToken(): Observable<User> {
		return this.http.get(this.apiUrl+'auth/getuserbytoken').map((response: Response) => {
			return response;
		}).catch(super.handleError);
	}
}