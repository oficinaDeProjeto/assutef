import { PainelComponent } from './views/painel/painel.component';
import { AssociadoComponent } from './views/associado/associado.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { ChequinhoComponent } from './views/chequinho/chequinho.component';
import { LancamentoComponent } from './views/lancamento/lancamento.component';
import { RouterModule, Routes } from '@angular/router';
import { blankComponent } from "./components/common/layouts/blank.component";
import { BasicComponent } from "./components/common/layouts/basic.component";
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ModuleWithProviders } from "@angular/core";
import { ProfileComponent } from './views/profile/profile.component';
import { ConveniadoComponent } from './views/conveniado/conveniado.component';
import { TipoconveniadoComponent } from './views/tipoconveniado/tipoconveniado.component';
import { ImpressaoChequinhoComponent } from './views/chequinho/impressao/impressao-chequinho.component';


const routes: Routes = [
    // Main redirect
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    // App views
    {
        path: '', component: BasicComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
                data: {
                    breadcrumb: "Notificações"
                }
            },
            {
                path: 'usuario',
                component: UsuarioComponent,
                data: {
                    breadcrumb: "Usuários"
                }
            },
            {
                path: 'categoria',
                component: CategoriaComponent,
                data: {
                    breadcrumb: "Categorias"
                }
            },
            {
                path: 'produto',
                component: ProdutoComponent,
                data: {
                    breadcrumb: "Produtos"
                }
            },
            {
                path: 'chequinho',
                component: ChequinhoComponent,
                data: {
                    breadcrumb: "Chequinho"
                }
            },
            {
                path: 'associado',
                component: AssociadoComponent,
                data: {
                    breadcrumb: "Associado"
                }
            },
            {
                path: 'tipoconveniado',
                component: TipoconveniadoComponent,
                data: {
                    breadcrumb: "Tipo Conveniado"
                }
            },
            {
                path: 'conveniado',
                component: ConveniadoComponent,
                data: {
                    breadcrumb: "Conveniado"
                }
            },
            {
                path: 'perfil',
                component: ProfileComponent,
                data: {
                    breadcrumb: "Perfil"
                }
            },
            {
                path: 'chequinhoimpressao/:ids',
                component: ImpressaoChequinhoComponent,
                data: {
                    breadcrumb: "Imprimir chequinho"
                }
            },
            {
                path: 'lancamento',
                component: LancamentoComponent,
                data: {
                    breadcrumb: "Lancamento"
                }
            },
            {
                path: 'painel',
                component: PainelComponent,
                data: {
                    breadcrumb: "Painel Associado"
                }
            }
        ]
    },
    {
        path: '', component: blankComponent,
        children: [
            {
                path: 'login/',
                component: LoginComponent
            }
        ]
    },

    // Handle all other routes
    { path: '**', component: LoginComponent }
];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(routes);
