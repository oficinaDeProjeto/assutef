import { MdDialog, MD_DIALOG_DATA, MdSnackBar, MdDialogRef } from '@angular/material';
import { Categoria } from './../../models/categoria';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
	selector: 'app-categoria',
	templateUrl: './categoria.component.html',
	styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
	
	categoria: Categoria = new Categoria();
	categorias: Categoria[] = [];
	selectedCategoria: Categoria = new Categoria;

	constructor(private dialog: MdDialog) { }

	ngOnInit() {
	}

	openDialog(categoria: Categoria) {
		categoria = categoria || new Categoria();
		
		const dialogRef = this.dialog.open(CategoriaDialogContent, {
			data: categoria
		});
	}

}

/**
 * Componente de dialog.
 */
@Component({
	selector: 'dialog-content',
	templateUrl: './categoriadialog.component.html',
	styleUrls: ['./categoriadialog.component.css']
})
export class CategoriaDialogContent {
	
	constructor( 
		@Inject(MD_DIALOG_DATA) public categoria: Categoria,
		public dialogRef: MdDialogRef<CategoriaDialogContent>
	) { }



	/*openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 4000
		});
	}*/

}

