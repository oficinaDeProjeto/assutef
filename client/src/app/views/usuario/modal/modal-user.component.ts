import { Usuario } from './../../../models/Usuario';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Grupousuario } from '../../../models/Grupousuario';
import { GrupousuarioService } from '../../../services/grupousuario/grupousuario.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['./modal-usuario.component.css']
})
export class ModalUsuarioComponent implements OnInit {

  grupos: Grupousuario[];
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(	
    public dialogRef: MatDialogRef<ModalUsuarioComponent>,
    public grupousuarioService: GrupousuarioService,
    @Optional() @Inject(MAT_DIALOG_DATA) public usuario: Usuario
	) { }

  ngOnInit() {
    if (!this.usuario){
		  this.usuario = new Usuario();
    }
    this.grupousuarioService.getAll().subscribe(grupos => {
      this.grupos = grupos;
    }, err => console.log(err));
  }
  


}
