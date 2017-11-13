import { Produto } from './../../../models/produto';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { GenericService } from '../../../services/generic/generic.service';
import { ProdutoService } from '../../../services/produto/produto.service';


@Component({
	selector: 'app-modal-produto',
	templateUrl: './modal-produto.component.html',
	styleUrls: ['./modal-produto.component.css']
})
export class ModalProdutoComponent implements OnInit {
	produto: Produto = new Produto();

	constructor(
		public dialogRef: MatDialogRef<ModalProdutoComponent>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data: Produto,
		public snackBar: MatSnackBar,
		private genericService: GenericService,
		private produtoService: ProdutoService
	) { }

	ngOnInit() {
		if (this.data)
			this.produto = this.data;

	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}

}
