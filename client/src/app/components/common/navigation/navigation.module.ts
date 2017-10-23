import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NavigationComponent } from "./navigation.component";
import { NavigationService } from '../../../services/navigation/navigation.service';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { MatListModule, MatIconModule } from "@angular/material";

@NgModule({
    declarations: [NavigationComponent],
    imports: [
        BrowserModule,
        RouterModule,
        MatListModule,
        MatIconModule,
        FlexLayoutModule
    ],
    exports: [NavigationComponent],
    providers: [
        NavigationService,
        UsuarioService
    ]
})

export class NavigationModule { }