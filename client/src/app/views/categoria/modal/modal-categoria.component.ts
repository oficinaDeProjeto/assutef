import { Categoria } from './../../../models/categoria';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { GenericService } from '../../../services/generic/generic.service';
import { CategoriaService } from '../../../services/categoria/categoria.service';


@Component({
	selector: 'app-modal-categoria',
	templateUrl: './modal-categoria.component.html',
	styleUrls: ['./modal-categoria.component.css']
})
export class ModalCategoriaComponent implements OnInit {
	categoria: Categoria = new Categoria();

	constructor(
		public dialogRef: MatDialogRef<ModalCategoriaComponent>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data: Categoria,
		private genericService: GenericService,
		private categoriaService: CategoriaService,
		public snackBar: MatSnackBar
	) { }

	ngOnInit() {
		if (this.data)
			this.categoria = this.data;
	}

	openSnakBar(message: string, action: string){
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

}
