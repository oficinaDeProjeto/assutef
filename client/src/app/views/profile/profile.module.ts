import { NgModule } from "@angular/core";
import { ProfileComponent } from './profile.component';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';
import { HttpInterceptorService } from '../../services/http-interceptor.service';
import { UsuarioService } from '../../services/usuario/usuario.service';

@NgModule({
    declarations: [ProfileComponent],
    exports:[ProfileComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
    providers: [
        UsuarioService
    ],
})

export class ProfileModule { }