import { AuthService } from './../../services/auth/auth.service';
import { Usuario } from './../../models/Usuario';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Associado } from './../../models/associado';
import { AssociadoService } from './../../services/associado/associado.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-activation-associado',
	templateUrl: './activation-associado.component.html',
	styleUrls: ['./activation-associado.component.css']
})
export class ActivationAssociadoComponent implements OnInit {
	
	token: string;
	associado: Associado = new Associado();
	usuario: Usuario = new Usuario();
	
	constructor(
		private router: Router,
		private associadoSerivice: AssociadoService,
		private route: ActivatedRoute,
		private usuarioService: UsuarioService,
		private authSevice: AuthService
	) {
	 }
	
	ngOnInit() {
		this.associado.usuario = new Usuario();
		this.token = this.route.snapshot.params['token'];
		this.getPreAssociadoByToken(this.token);
	}

	/**
	 * A partir do toke que usuário passa, obtemos o email e conta que vai participar.
	 * @param token 
	 */
	getPreAssociadoByToken(token: string) {
		this.associadoSerivice.getPreAssociadoByToken(token).subscribe(res => {
			this.associado = res;
		}, err => {
			console.log(err);
		})
	}

	save(usuario: Usuario) {
		usuario.email = this.associado.email;
		usuario.nome = this.associado.nome;
		usuario.role = 'ASSOCIADO';
		this.usuarioService.save(usuario).subscribe(result => {
			this.associado.usuario = <Usuario>result.usuario;
			this.associadoSerivice.save(this.associado).subscribe(associado => {
				console.log(associado);
				this.authSevice.saveToken(result.token);
				this.router.navigate(['home']);
			}, err => {
				console.log(err);
			})
		}, err => {
			console.log(err);
		});
	}

}
