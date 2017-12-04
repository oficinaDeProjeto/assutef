import { GenericService } from './../../services/generic/generic.service';
import { AuthService } from './../../services/auth/auth.service';
import { Categoria } from './../../models/categoria';
import { ModalCategoriaComponent } from './modal/modal-categoria.component';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { ConfirmDialogService } from './../../components/common/confirm-dialog/confirm-dialog.service';
import { CategoriaService } from './../../services/categoria/categoria.service';
@Component({
	selector: 'app-categoria',
	templateUrl: './categoria.component.html',
	styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
	[x: string]: any;
//instanciando
	categoria: Categoria = new Categoria();
	categorias: Categoria[] = [];
	selectedCategoria: Categoria = new Categoria;
	filteredCategorias: Categoria[] = [];
//criando
	constructor(
		private genercService: GenericService,
		private router: Router,
		private authService: AuthService,
		public dialog: MatDialog,
		public confirmDialogService: ConfirmDialogService,
		public snackBar: MatSnackBar,
		private categoriaService: CategoriaService
	) {
	}

	ngOnInit() {
		this.findAll();
	}

//buscando todas as categorias
	findAll() {
		this.categoriaService.findAll().subscribe(categorias => {
			this.categorias = <Categoria[]>categorias;
			this.filteredCategorias = Object.assign([], this.categorias);
		}, err => {
			this.openSnackBar("Não foi possível carregar ", "OK");
		});
	}

	salvarCategoria(categoria: Categoria) {
		this.genercService.save('categoria', categoria).subscribe(categoria => {
			console.log('Salvo com sucesso');
			this.getAll();
		}, err => {
			console.log(err);
		});
	}
//criando nova Categoria
	newCategoria() {
		this.selectedCategoria = new Categoria();
	}

	assignCopy() {
		this.filteredCategorias = Object.assign([], this.categoria);
	}
//filtragem das categorias
	filterCategoria(query) {
		if (!query) {
			this.filteredCategorias = Object.assign([], this.categorias);
		} else {
			this.filteredCategorias = Object.assign([], this.categoria).filter(
				categoria => categoria.descricao.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
		}
	}
//abrir o modal de categoria
	openDialog(categoria: Categoria): void {
		let dialogRef = this.dialog.open(ModalCategoriaComponent, {
			data: categoria
		});

		dialogRef.afterClosed().subscribe(result => {
			this.save(result);
		});
	}
//deletar e msg
	delete(categoria: Categoria) {
		this.confirmDialogService.confirm(
			'Confirmação',
			`Você tem ceteza que deseja remover ${categoria.descricao}?`)
			.subscribe(res => {
				if (res) {
					this.categoriaService.delete(categoria.id).subscribe(categoria => {
						this.openSnackBar("Removido com sucesso", "OK");
						this.findAll();
					}, err => {
						this.openSnackBar("Não foi possível remover ", "OK");
					})
				}
			});
	}
//salvar categoria e mostra msg .save do categoria.service.ts
	save(categoria: Categoria) {
		this.categoriaService.save(categoria).subscribe(categoria => {
			this.openSnackBar("Salvo com sucesso", "OK");
			this.findAll();
		}, err => {
			this.openSnackBar("Não foi possível salvar ", "OK");
		});
	}
//msg parte inferior da tela
	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 10000,
		});
	}


}