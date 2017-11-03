import { Component, OnInit } from '@angular/core';
import { Carrinho } from '../../models/carrinho';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { CarrinhoService } from '../../services/carrinho/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  carrinhos : Carrinho[] = [];
	filteredCarrinhos: Carrinho[] = [];
	selectedCarrinho = new Carrinho();

  ngOnInit() {
    this.getAll();
  }

  getAll() {
		this.carrinhoService.getAll().subscribe(carrinhos => {
			this.carrinhos = <Carrinho[]>carrinhos;
			this.filteredCarrinhos = Object.assign([], this.carrinhos);
			this.selectedCarrinho = this.carrinhos[0];
		}, err => {
			console.log(err);
		});
  }

  constructor(
		iconRegistry: MatIconRegistry, 
		sanitizer: DomSanitizer, 
		private carrinhoService: CarrinhoService,
		private dialog: MatDialog
	) {
		// To avoid XSS attacks, the URL needs to be trusted from inside of your application.
		const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');
		iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
	}


	openUser(carrinho): void{
		let dialogRef = this.dialog.open(CarrinhoComponent, {
			data: carrinho
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
			//this.salvarCategoria(result);
		});
	}
	
	openNewCarrinhoDialog(): void {
		let dialogRef = this.dialog.open(CarrinhoComponent, {
			data: null
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
			//this.salvarCategoria(result);
		});
	}


}
