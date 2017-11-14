import { Produto } from './../../../models/produto';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { GenericService } from '../../../services/generic/generic.service';
import { ProdutoService } from '../../../services/produto/produto.service';
import { CategoriaService } from '../../../services/categoria/categoria.service';
import { Categoria } from '../../../models/categoria';


@Component({
	selector: 'app-modal-produto',
	templateUrl: './modal-produto.component.html',
	styleUrls: ['./modal-produto.component.css']
})
export class ModalProdutoComponent implements OnInit {
	produto: Produto = new Produto();
	categorias: Categoria[] = []

	constructor(
		public dialogRef: MatDialogRef<ModalProdutoComponent>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data: Produto,
		public snackBar: MatSnackBar,
		private genericService: GenericService,
		private produtoService: ProdutoService,
		private categoriaService: CategoriaService
	) { }

	ngOnInit() {
		if (this.data)
			this.produto = this.data;

		this.findAllCategoria();
		
	}

	findAllCategoria() {
		this.categoriaService.findAll().subscribe(res => {
			this.categorias = res;
		}, err => {
			this.openSnackBar("Erro ao listar categoria", "OK");
		})
	}
	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

}
