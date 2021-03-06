import { ContaModule } from './views/conta/conta.module';
import { PlanoContaModule } from './views/plano-conta/plano-conta.module';
import { ActivationAssociadoComponent } from './views/activation-associado/activation-associado.component';
import { PainelModule } from './views/painel/painel.module';
import { UsuarioModule } from './views/usuario/usuario.module';
import { ChequinhoModule } from './views/chequinho/chequinho.module';
import { ImpressaoChequinhoModule } from './views/chequinho/impressao/impressao-chequinho.module';
import { CategoriaModule } from './views/categoria/categoria.module';
import { ProdutoModule } from './views/produto/produto.module';
import { ContabancariaModule } from './views/contabancaria/contabancaria.module';
import { RemessabancariaModule } from './views/remessabancaria/remessabancaria.module';
import { AssociadoModule } from './views/associado/associado.module';
import { LancamentoModule } from './views/lancamento/lancamento.module';
import { GrupousuarioModule } from './views/grupousuario/grupousuario.module';

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
import { TipoconveniadoModule } from './views/tipoconveniado/tipoconveniado.module';
import { ConveniadoModule } from './views/conveniado/conveniado.module';

import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { NgxBarcodeModule } from 'ngx-barcode';
import {MatTableModule} from '@angular/material';
import { ActivationAssociadoModule } from './views/activation-associado/activation.module';
import { VendaModule } from './views/venda/venda.module';
import { CarrinhoModule } from './views/carrinho/carrinho.module';
import { BancoModule } from './views/banco/banco.module';
import { RechequinhoModule } from './views/rechequinho/rechequinho.module';


/** s
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
		ProdutoModule,
        ContabancariaModule,
        RemessabancariaModule,
		ChequinhoModule,
		UsuarioModule,
		LancamentoModule,
		ImpressaoChequinhoModule,
		GrupousuarioModule,
		PainelModule,
		ActivationAssociadoModule,
		ProdutoModule,
		VendaModule,
		CarrinhoModule,
		PlanoContaModule,
		ContaModule,
		// Modules
		NgxBarcodeModule,
		LayoutsModule,
		TipoconveniadoModule,
		ConveniadoModule,
		BancoModule,
		PainelModule,
		RechequinhoModule,
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
