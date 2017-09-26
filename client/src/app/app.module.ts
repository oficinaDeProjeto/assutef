import { GenericService } from './service/generic/generic.service';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { AuthService } from './service/auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ROUTES } from "./app.routes";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import 'hammerjs';
import { BlankComponent } from './common/layouts/blank/blank.component';
import { BasicComponent } from './common/layouts/basic/basic.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { UserComponent } from './views/user/user.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { ChequinhoComponent } from './views/chequinho/chequinho.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    BasicComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    CategoriaComponent,
    ChequinhoComponent
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
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
