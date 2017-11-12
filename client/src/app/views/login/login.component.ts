import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	emailFormControl = new FormControl('', [
		Validators.required,
		Validators.pattern(EMAIL_REGEX)
	]);
	passWordFormControll = new FormControl('', [
		Validators.required
	])

	private loginModel: any = {};
	private error = '';
	constructor(private router: Router,
		private authenticationService: AuthService) { }

	ngOnInit() {
		this.authenticationService.logout();
	}

	login() {
		this.authenticationService.login(this.loginModel.email, this.loginModel.password)
			.subscribe(result => {
				this.router.navigate(['/']);
			}, err => {
				console.log(err);
				this.error = 'Usuário ou senha incorretos';
			});
	}
}