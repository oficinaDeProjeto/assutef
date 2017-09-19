import { Router } from '@angular/router';
import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-basic',
	templateUrl: './basic.component.html',
	styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
	isDarkTheme = false;
	public currentUser: User;
	constructor(private router: Router) { }

	ngOnInit() {
		let localUser = JSON.parse(localStorage.getItem('currentUser'));
		if (localUser) {
			this.currentUser = JSON.parse(localStorage.getItem('currentUser')).user;
		} else {
			this.router.navigate(['/login']);
		}

	}
}
