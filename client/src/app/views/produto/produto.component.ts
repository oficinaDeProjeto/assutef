import { GenericService } from './../../services/generic/generic.service';
import { AuthService } from './../../services/auth/auth.service';
import { Produto } from './../../models/produto';
import { ModalProdutoComponent } from './modal/modal-produto.component';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { ProdutoService } from '../../services/produto/produto.service';
import { Categoria } from '../../models/categoria';
import { ModalCategoriaComponent } from '../categoria/modal/modal-categoria.component';
import { ConfirmDialogService } from '../../components/common/confirm-dialog/confirm-dialog.service';
import { CategoriaService } from '../../services/categoria/categoria.service';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
/**
 * Teste para commit
 */

@Component({
	selector: 'app-produto',
	templateUrl: './produto.component.html',
	styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
	[x:string]: any;

	produto: Produto = new Produto();
	produtos: Produto[] = [];
	selectedProduto: Produto = new Produto;
	filteredProdutos: Produto[] = [];
	categorias: Categoria[] = [];

	constructor(
		private produtoService: ProdutoService,
		private router: Router,
		private authService: AuthService,
		public dialog: MatDialog,
		private genericService: GenericService,
		public confirmDialogService: ConfirmDialogService,
		public snackBar: MatSnackBar,
		private categoriaService: CategoriaService
	) {
	}

	@ViewChild('filter') filter: ElementRef;

	ngOnInit() {
		//this.findAll();
		this.getAllCategorias();
	}

	findAll() {
		this.produtoService.findAll().subscribe(produtos => {
			this.produtos = <Produto[]>produtos;
			//this.produtos = produtos;
			this.filteredProdutos = Object.assign([], this.produtos);
		}, err => {
			this.openSnackBar("Não foi possível carregar ", "OK");
		});
	}

	getAllCategorias(){
		this.categoriaService.findAll().subscribe(a => {
			this.categorias = <Categoria[]> a;
		}, err => {
			console.log("Erro ao listar categorias");			
		});
  }

	salvarProduto(produto: Produto) {
		this.produtoService.save(produto).subscribe(produto => {
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
			//console.log(result);
			//this.salvarProduto(result);
			this.save(result);
		});
	}

	delete(produto: Produto) {
		this.confirmDialogService.confirm(
			'Confirmação',
			`Você tem ceteza que deseja remover ${produto.nome}?`)
			.subscribe(res => {
				if (res) {
					this.produtoService.delete(produto.id).subscribe(produto => {
						this.openSnackBar("Removido com sucesso", "OK");
						this.findAll();
					}, err => {
						this.openSnackBar("Não foi possível remover ", "OK");
					})
				}
			});
	}

	save(produto: Produto) {
		this.produtoService.save(produto).subscribe(produto => {
			this.openSnackBar("Salvo com sucesso", "OK");
			this.findAll();
		}, err => {
			this.openSnackBar("Não foi possível salvar o produto", "OK");
		});
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}


}