import { UsuarioService } from './../../services/usuario/usuario.service';
import { AssociadoService } from './../../services/associado/associado.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';
import { ActivationAssociadoComponent } from './activation-associado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [ActivationAssociadoComponent],
	exports: [ActivationAssociadoComponent],
	imports: [
		CommonModule,
        FormsModule,
        ReactiveFormsModule,
		MatCardModule,
		MatInputModule,
		MatButtonModule
	],
	providers: [
		AssociadoService,
		UsuarioService
	]
})
export class ActivationAssociadoModule { }
