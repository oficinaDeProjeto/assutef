import { Produto } from "./produto";

export class Carrinho {
    produtos: Array<Produto>;
    quantidade: number;
    valor: number;
}