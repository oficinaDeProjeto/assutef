import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/Usuario';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    usuario: Usuario = new Usuario();

    senha = '';
    novaSenha = '';
    confirmaNovaSenha = '';
    mensagem: string;
    mensagemType = "alert-warning";


    constructor(
        private usuarioService: UsuarioService,
        private router: Router
    ) { }

    ngOnInit() {
        this.usuarioService.getUsuarioLogged().subscribe(res => {
            this.usuario = res;
        }, err => {
            this.router.navigate(['login']);
        });
    }

    alterar() {
        this.mensagemType = "alert-warning";

        if (this.senha.length < 3) {
            this.mensagem = "Informe sua senha!";
        } else if (this.novaSenha.length < 3) {
            this.mensagem = "A nova senha precisa ter mais que 3 caracteres!";
        } else if (this.novaSenha !== this.confirmaNovaSenha) {
            this.mensagem = "Sua confirmação de senha precisa ser igual a nova senha!";
        } else if (this.senha === this.novaSenha) {
            this.mensagem = "A nova senha precisa ser diferente da senha anterior!";
        } else {
            // this.usuarioService.updateSenha(this.senha, this.novaSenha).subscribe(res => {
            //     if ( res ) {
            //         this.mensagem = "Senha alterada com sucesso!";
            //         this.mensagemType = "alert-success";
            //         this.senha = '';
            //         this.novaSenha = '';
            //         this.confirmaNovaSenha = '';
            //     } else {
            //         this.mensagem = "Sua senha atual não confere!";
            //     }
            // });
        }
    }


    hideMessagem() {
        this.mensagem = "";
    }

}
