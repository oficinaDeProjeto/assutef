import { Categoria } from './../../../models/categoria';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
	selector: 'app-modal-categoria',
	templateUrl: './modal-categoria.component.html',
	styleUrls: ['./modal-categoria.component.css']
})
export class ModalCategoriaComponent implements OnInit {
	categoria: Categoria = new Categoria();

	constructor(
		public dialogRef: MatDialogRef<ModalCategoriaComponent>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data: Categoria
	) { }

	ngOnInit() {
		if (this.data)
			this.categoria = this.data;

	}

}
