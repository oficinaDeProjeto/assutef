import { Usuario } from './../../../models/Usuario';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['./modal-usuario.component.css']
})
export class ModalUsuarioComponent implements OnInit {

  usuario:Usuario = new Usuario()

  constructor(	public dialogRef: MatDialogRef<ModalUsuarioComponent>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data: Usuario
	) { }

  ngOnInit() {
    if (this.data) 
    this.usuario = this.data;
  }

}
