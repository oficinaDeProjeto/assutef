import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Carrinho } from '../../models/carrinho';
import { MatIconRegistry, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { CarrinhoService } from '../../services/carrinho/carrinho.service';
import { Produto } from '../../models/produto';
import { Venda } from '../../models/venda';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {

  constructor(
		iconRegistry: MatIconRegistry, 
		sanitizer: DomSanitizer, 
		private carrinhoService: CarrinhoService,
		private dialog: MatDialog,
		@Optional() @Inject(MAT_DIALOG_DATA) public venda: Venda
	) {
		// To avoid XSS attacks, the URL needs to be trusted from inside of your application.
		const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');
		iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
		if (!this.venda) {
			this.venda = new Venda();
		}
	}

	addProduto(produto: Produto): void {
		// let length = this.venda.produtos && this.venda.produtos.length;
		// if (!length) {
		// 	this.venda.produtos = [];
		// 	length = 0;
		// }
		// length++;
		// if (!produto) {
		// 	produto = new Produto();
		// }

		// this.venda.produtos.push(produto);
		// this.venda.total = this.getTotalVenda();
	}

	private getTotalVenda(): number {
		// if (!this.venda || !this.venda.produtos || !this.venda.produtos.length) {
		// 	return 0;
		// }
		// let total = 0;
		// this.venda.produtos.forEach(produto => total += produto['valor']);
		// return total;
		return 0;
	}

}
