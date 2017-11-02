import { UsuarioModule } from './views/usuario/usuario.module';
import { ChequinhoModule } from './views/chequinho/chequinho.module';
import { CategoriaModule } from './views/categoria/categoria.module';
import { AssociadoModule } from './views/associado/associado.module';
import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
// App views
// App modules/components
import { LoginModule } from './views/login/login.module';
import { HomeModule } from './views/home/home.module';
import { LayoutsModule } from './components/common/layouts/layouts.module';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ProfileModule } from './views/profile/profile.module';
import { ToastyModule, ToastyService } from "ng2-toasty";

/**
 * Módulo principal da aplicação 
 * delclara o componente principal e importa os módulos das outras telas
 */
@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    ToastyModule.forRoot(),

    // Views (Módulos)
    LoginModule,
    HomeModule,
    ProfileModule,
    AssociadoModule,
    CategoriaModule,
    ChequinhoModule,
    UsuarioModule,
    LayoutsModule,
    ROUTES
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR" },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    ToastyService
  ],
})
export class AppModule {
}
