import { ModalAssociadoComponent } from './views/associado/associado/modal/modal-associado.component';
import { ModalCategoriaComponent } from './views/categoria/modal/modal-categoria.component';
import 'hammerjs';
import { AppComponent } from './app.component';
import { AuthService } from './service/auth/auth.service';
import { BasicComponent } from './common/layouts/basic/basic.component';
import { BlankComponent } from './common/layouts/blank/blank.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { ChequinhoComponent } from './views/chequinho/chequinho.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenericService } from './service/generic/generic.service';
import { HomeComponent } from './views/home/home.component';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { HttpModule, Http } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";
import { UserComponent } from './views/user/user.component';
import { AssociadoComponent } from './views/associado/associado/associado.component';
import { ModalUserComponent } from './views/user/modal/modal-user/modal-user.component';
import { ConveniadoComponent } from './views/conveniado/conveniado.component';
import { TipoconveniadoComponent } from './views/tipoconveniado/tipoconveniado.component';
import { ModalTipoconveniadoComponent } from 'app/views/tipoconveniado/modal/modal-tipoconveniado.component';
import { ModalConveniadoComponent } from 'app/views/conveniado/modal/modal-conveniado.component';

@NgModule({
	declarations: [
		AppComponent,
		BlankComponent,
		BasicComponent,
		HomeComponent,
		LoginComponent,
		UserComponent,
		CategoriaComponent,
		ChequinhoComponent,
		AssociadoComponent,
		ModalCategoriaComponent,
		ModalAssociadoComponent,
		ModalUserComponent,
		ConveniadoComponent,
		TipoconveniadoComponent,
		ModalTipoconveniadoComponent,
		ModalConveniadoComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule,
		FlexLayoutModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(ROUTES),
		ReactiveFormsModule,
	],
	providers: [
		{ provide: Http, useClass: HttpInterceptorService },
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		AuthService,
		GenericService
	],
	entryComponents: [ModalCategoriaComponent, ModalAssociadoComponent, ModalUserComponent, 
		ModalTipoconveniadoComponent, ModalConveniadoComponent],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
