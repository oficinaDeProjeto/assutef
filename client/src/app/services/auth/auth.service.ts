import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { environment } from './../../../environments/environment';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SuperService } from './../super.service';
import { Params, Router } from '@angular/router';

@Injectable()
export class AuthService extends SuperService {

	readonly JWT_KEY = "Authorization";
	private apiUrl = environment.api_url;


	constructor(private http: Http, private router: Router, ) {
		super();
	}

	login(email: string, senha: string): Observable<boolean> {
		const params = new URLSearchParams();
		params.append('email', email);
		params.append('password', senha);

		const headers = new Headers({
			'Content-type': 'application/x-www-form-urlencoded',
			'Authorization': 'Basic YXBwOmFwcA=='
		});
		const options = new RequestOptions({ headers: headers });
		const url = `${this.apiUrl}auth`;

		return this.http.post(url, params.toString(), options)
			.map((response: Response) => {
				let token = response.json() && response.json().token;
				if (token) {
					localStorage.setItem(this.JWT_KEY, token);
					return true;
				} else {
					return false;
				}
			}).catch(super.handleError);
	}

	public logout(): void {
		localStorage.removeItem(this.JWT_KEY);
	}

	isAuthorized(): boolean {
		return this.getAuthorization() !== null;
	}

    getAuthorization(): string {
        return localStorage.getItem(this.JWT_KEY);
	}

	public logoutAndToHome(): void {
		localStorage.removeItem(this.JWT_KEY);
		this.goTo("/home");
	}

	private goTo(page: string): void {
		this.router.navigate([page]);
	}

}
