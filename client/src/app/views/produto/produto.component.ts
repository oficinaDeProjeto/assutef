import { GenericService } from './../../services/generic/generic.service';
import { AuthService } from './../../services/auth/auth.service';
import { Produto } from './../../models/produto';
import { ModalProdutoComponent } from './modal/modal-produto.component';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
	selector: 'app-produto',
	templateUrl: './produto.component.html',
	styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

	produto: Produto = new Produto();
	produtos: Produto[] = [];
	selectedProduto: Produto = new Produto;
	filteredProdutos: Produto[] = [];

	constructor(
		private genercService: GenericService,
		private router: Router,
		private authService: AuthService,
		public dialog: MatDialog
	) {
	}

	ngOnInit() {
		this.getAll();
	}


	getAll() {
		this.genercService.getAll('produto').subscribe(produtos => {
			this.produtos = <Produto[]>produtos;
			this.filteredProdutos = Object.assign([], this.produtos);
		}, err => {
			console.log(err);
		});
	}

	salvarProduto(produto: Produto) {
		this.genercService.save('produto', produto).subscribe(produto => {
			console.log('Salvo com sucesso');
			this.getAll();
		}, err => {
			console.log(err);
		});
	}

	newProduto() {
		this.selectedProduto = new Produto();
	}

	assignCopy() {
		this.filteredProdutos = Object.assign([], this.produto);
	}

	filterProduto(query) {
		if (!query) {
			this.filteredProdutos = Object.assign([], this.produtos);
		} else {
			this.filteredProdutos = Object.assign([], this.produto).filter(
				produto => produto.nome.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
		}
	}

	openDialog(produto: Produto): void {
		let dialogRef = this.dialog.open(ModalProdutoComponent, {
			data: produto
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
			this.salvarProduto(result);
		});
	}



}