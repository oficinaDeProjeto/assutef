import { GrupousuarioComponent } from './views/grupousuario/grupousuario.component';
import { ActivationAssociadoComponent } from './views/activation-associado/activation-associado.component';
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
import { VendaComponent } from './views/venda/venda.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { BancoComponent } from './views/banco/banco.component';
import { RechequinhoComponent } from './views/rechequinho/rechequinho.component';


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
                path: 'banco',
                component: BancoComponent,
                data: {
                    breadcrumb: "Banco"
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
                path: 'lancamento',
                component: LancamentoComponent,
                data: {
                    breadcrumb: "Lancamento"
                }
            },
            {
                path: 'grupousuario',
                component: GrupousuarioComponent,
                data: {
                    breadcrumb: "Grupo de Usuários"
                }
            },
            {
                path: 'painel',
                component: PainelComponent,
                data: {
                    breadcrumb: "Painel Associado"
                }
            },
            {
                path: 'venda',
                component: VendaComponent,
                data: {
                    breadcrumb: "Venda"
                },
                children: [
                    {
                        path: 'carrinho/',
                        component: CarrinhoComponent
                    }
                ]
            },
            {
                path: 'rechequinho',
                component: RechequinhoComponent,
                data:{
                    breadcrumb: 'Re-Impressão Chequinho'
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
            },
            {
                path: 'activation-associado/:token',
                component: ActivationAssociadoComponent
            },
            {
                path: 'chequinhoimpressao/:ids',
                component: ImpressaoChequinhoComponent,
                data: {
                    breadcrumb: "Imprimir chequinho"
                }
            }
        ]
    },
    // Handle all other routes
    { path: '**', component: LoginComponent }
];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(routes);
