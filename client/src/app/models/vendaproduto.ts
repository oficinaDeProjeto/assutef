import { Produto } 
from './produto';

import { Venda } 
from './venda';

export class VendaProduto {

id: string;
venda: Venda = new Venda();
produto: Produto = new Produto();
sku: string;
quatidade: string;

}

