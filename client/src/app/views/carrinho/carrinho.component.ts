import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Carrinho } from '../../models/carrinho';
import { MatIconRegistry, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { CarrinhoService } from '../../services/carrinho/carrinho.service';
import { Produto } from '../../models/produto';
import { Venda } from '../../models/venda';
import { ProdutoService } from '../../services/produto/produto.service';
import { VendaProduto } from '../../models/vendaproduto';
import { Associado } from '../../models/associado';
import { AssociadoService } from '../../services/associado/associado.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

produtos: Produto[] = [];
associados: Associado[] = [];

constructor(
	iconRegistry: MatIconRegistry,
	sanitizer: DomSanitizer,
	private carrinhoService: CarrinhoService,
	private dialog: MatDialog,
	private produtoService: ProdutoService,
	private associadoService: AssociadoService,
	@Optional() @Inject(MAT_DIALOG_DATA) public venda: Venda
) {
	// To avoid XSS attacks, the URL needs to be trusted from inside of your application.
const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');
	iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
		if (!this.venda) {
		this.venda = new Venda();
	}
}

addProduto(): void {
	if (!this.venda) {
		return;
	}
	if (!this.venda.produtos || !this.venda.produtos.length) {
		this.venda.produtos = [];
	}
	const vendaProduto = new VendaProduto();
	vendaProduto.quantidade = "1";
	this.venda.produtos.push(vendaProduto);
}

compararAssociado(associadoAtual: Associado, associadoSelecionado: Associado): boolean {
	return associadoAtual && associadoSelecionado && 
		associadoAtual.id === associadoSelecionado.id;
}

compararProduto(produtoAtual: Produto, produtoSelecionado: Produto): boolean {
	return produtoAtual && produtoSelecionado &&
		produtoAtual.id === produtoSelecionado.id;
}

private getTotalVenda(): number {
	if (!this.venda || !this.venda.produtos || !this.venda.produtos.length) {
		return 0;
	}
	let total = 0;
	this.venda.produtos.forEach(vendaProduto => {
		const quantidade = parseFloat(vendaProduto.quantidade || '1');
		const valor = parseFloat(vendaProduto.valor || '0');
		total += quantidade * valor;
	});
	return total;
}

getDescricaoProduto(vendaProduto: VendaProduto): string {
	return (vendaProduto && vendaProduto.produto &&
		vendaProduto.produto.descricao);
}

getValorProduto(vendaProduto: VendaProduto): number {
	return (vendaProduto && vendaProduto.produto && 
		parseFloat(vendaProduto.produto.valor)) || 0;
}

ngOnInit() {
	this.produtoService.findAll().subscribe(produtos => {
		this.produtos = produtos || [];
	});
	this.associadoService.findAll().subscribe(associados => {
		this.associados = associados || [];
	});
}

onProdutoChange(produto, vendaProduto: VendaProduto): void {
	if (vendaProduto) {
		vendaProduto.produto = produto;
		vendaProduto.valor = (produto && produto.valor) || '0';
	}	
	this.venda.total = `${this.getTotalVenda()}`;
}

onQuantidadeChange(quantidade, vendaProduto: VendaProduto): void {
	if (vendaProduto) {
		vendaProduto.quantidade = `${quantidade || 0}`;	
	}
	this.venda.total = `${this.getTotalVenda()}`;
}

removerProduto(index: number) {
	if (this.venda && this.venda.produtos && this.venda.produtos.length) {
		this.venda.produtos.splice(index, 1);
	}
}

}
