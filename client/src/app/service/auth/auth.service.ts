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
		var currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.token = currentUser && currentUser.token;
	}

	public login(email: string, password: string): Observable<boolean> {
		return this.http.post(this.apiUrl + 'auth', JSON.stringify({ email: email, password: password }))
			.map((response: Response) => {
				let token = response.json() && response.json().token;
				let user = response.json() && response.json().user;
				if (token) {
					this.token = token;
					console.log(token);
					localStorage.setItem('currentUser', JSON.stringify({ user: user, token: token }));
					return true;
				} else {
					return false;	
				}
			});
	}

	public logout(): void {
		this.token = null;
		localStorage.removeItem('currentUser');
	}

	public isLoggedIn(): boolean {
		return true;
	}

	public isLoggedInFalse(): boolean {
		return false;
	}
}