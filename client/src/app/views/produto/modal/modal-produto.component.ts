import { Produto } from './../../../models/produto';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
	selector: 'app-modal-produto',
	templateUrl: './modal-produto.component.html',
	styleUrls: ['./modal-produto.component.css']
})
export class ModalProdutoComponent implements OnInit {
	produto: Produto = new Produto();

	constructor(
		public dialogRef: MatDialogRef<ModalProdutoComponent>,
		@Optional() @Inject(MAT_DIALOG_DATA) public data: Produto
	) { }

	ngOnInit() {
		if (this.data)
			this.produto = this.data;

	}

}
