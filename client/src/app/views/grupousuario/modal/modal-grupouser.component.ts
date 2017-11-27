import { Grupousuario } from './../../../models/Grupousuario';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-grupousuario',
  templateUrl: './modal-grupousuario.component.html',
  styleUrls: ['./modal-grupousuario.component.css']
})
export class ModalGrupousuarioComponent implements OnInit {

  grupousuario:Grupousuario = new Grupousuario()

  constructor(	public dialogRef: MatDialogRef<ModalGrupousuarioComponent>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data: Grupousuario
	) { }

  ngOnInit() {
    if (this.data){
		this.grupousuario = this.data;
		this.showInfos();
	}
  }
  
  showInfos(): void{
	  //mostrar as infos do usuario nos campos e desativar os mesmos
	  //só ativar quando clicado no botao editar
	  
  }

}
