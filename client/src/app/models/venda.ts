import { Associado } 
from './associado';
import { Produto } from './produto';
import { VendaProduto } from './vendaproduto';

export class Venda {

    id: string;
    associado: Associado = new Associado();
    total: string;
    produtos: Array<VendaProduto>;
    data: string;

    constructor() {
        this.data = new Date().toLocaleString();
    }

}
