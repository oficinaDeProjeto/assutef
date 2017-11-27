import { Categoria } from "./categoria";

export class Produto {
    id:string;
    nome:string;
    descricao:string;
    valor:string;
    categoria:Categoria = new Categoria();
    unidade:string;
    estoque:string;
}
