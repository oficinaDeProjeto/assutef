import { Categoria } from './../../../models/categoria';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, Optional } from '@angular/core';

@Component({
	selector: 'app-modal-categoria',
	templateUrl: './modal-categoria.component.html',
	styleUrls: ['./modal-categoria.component.css']
})
export class ModalCategoriaComponent implements OnInit {
	categoria: Categoria = new Categoria();

	constructor(
		public dialogRef: MdDialogRef<ModalCategoriaComponent>,
		@Optional() @Inject(MD_DIALOG_DATA) public data: Categoria
	) { }

	ngOnInit() {
		if (this.data) 
			this.categoria = this.data;
		
	}

}
