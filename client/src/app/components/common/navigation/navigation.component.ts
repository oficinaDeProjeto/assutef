import { NavigationService } from './../../../services/navigation/navigation.service';
import { UsuarioService } from './../../../services/usuario/usuario.service';
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/Usuario';
import {AuthService} from "../../../services/auth/auth.service";

declare var jQuery: any;

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.template.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

    menuItenSelected: any = {};
    isOpen = false;
    menuItens: any[] = [];
    usuario = new Usuario();

    constructor( private router: Router,
                 private navigationService: NavigationService,
                 private usuarioService: UsuarioService,
                 private authenticationService: AuthService) { }

    ngOnInit() {
        this.createMenus();
    }

    createMenus() {
        this.usuarioService.getUsuarioLogged().subscribe(res => {
            this.usuario = res;
            this.menuItens = this.navigationService.filterMenuByRole(this.usuario.role);
        }, err => {
            this.router.navigate(['login']);
        })
    }

    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }

    // togleSideNav(item) {
    //     if (item.itens) {
    //         if (item.agrupador === this.menuItenSelected.agrupador) {
    //             this.isOpen = false;
    //             this.menuItenSelected = {};
    //         } else {
    //             this.menuItenSelected = item;
    //             this.isOpen = true;
    //         }
    //     } else {
    //         this.router.navigate([item.link]);
    //         this.isOpen = false;
    //     }
    // }

    logout() {
        this.authenticationService.logoutAndToHome();
    }

}
