import { AssociadoComponent } from './views/associado/associado.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { ChequinhoComponent } from './views/chequinho/chequinho.component';
import { RouterModule, Routes } from '@angular/router';
import { blankComponent } from "./components/common/layouts/blank.component";
import { BasicComponent } from "./components/common/layouts/basic.component";
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ModuleWithProviders } from "@angular/core";
import { ProfileComponent } from './views/profile/profile.component';
import { VendaComponent } from './views/venda/venda.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';


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
                path: 'perfil',
                component: ProfileComponent,
                data: {
                    breadcrumb: "Perfil"
                }
            },
            {
                path: 'venda',
                component: VendaComponent,
                data:{
                    breadcrumb: "Venda"
                },
                children: [
                    {
                        path: 'carrinho/',
                        component: CarrinhoComponent
                    }
                ]
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
