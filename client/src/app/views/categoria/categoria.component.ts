import { GenericService } from './../../services/generic/generic.service';
import { AuthService } from './../../services/auth/auth.service';
import { Categoria } from './../../models/categoria';
import { ModalCategoriaComponent } from './modal/modal-categoria.component';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
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
	filteredCategorias: Categoria[] = [];

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
		this.genercService.getAll('categoria').subscribe(categorias => {
			this.categorias = <Categoria[]>categorias;
			this.filteredCategorias = Object.assign([], this.categorias);
		}, err => {
			console.log(err);
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

	newCategoria() {
		this.selectedCategoria = new Categoria();
	}

	assignCopy() {
		this.filteredCategorias = Object.assign([], this.categoria);
	}

	filterCategoria(query) {
		if (!query) {
			this.filteredCategorias = Object.assign([], this.categorias);
		} else {
			this.filteredCategorias = Object.assign([], this.categoria).filter(
				categoria => categoria.descricao.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
		}
	}

	openDialog(categoria: Categoria): void {
		let dialogRef = this.dialog.open(ModalCategoriaComponent, {
			data: categoria
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
			this.salvarCategoria(result);
		});
	}



}