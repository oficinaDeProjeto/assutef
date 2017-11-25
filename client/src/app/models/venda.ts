import { Associado } 
from './associado';
import { Produto } from './produto';

export class Venda {

    id: string;
    associado: Associado = new Associado();
    total: number;
    produtos: Array<Produto>;
    data: string;

    constructor() {
        this.data = new Date().toLocaleString();
    }

}
