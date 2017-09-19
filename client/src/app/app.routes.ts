import { BlankComponent } from './common/layouts/blank/blank.component';
import { LoginComponent } from './views/login/login.component';
import { AdminComponent } from './views/admin/admin.component';
import { HomeComponent } from './views/home/home.component';
import { BasicComponent } from './common/layouts/basic/basic.component';
import { Routes } from "@angular/router";


export const ROUTES: Routes = [
	// Main redirect
	{ path: '', redirectTo: 'home', pathMatch: 'full' },

	// App views
	{
		path: '', component: BasicComponent,
		children: [
			{ path: 'home', component: HomeComponent },
			{ path: 'admin', component: AdminComponent }
		]
	},
	{
		path: '', component: BlankComponent,
		children: [
			{ path: 'login', component: LoginComponent }
		]
	},

	{ path: '**', component: HomeComponent }
];