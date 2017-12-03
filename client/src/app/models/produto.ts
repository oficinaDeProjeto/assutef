import { Categoria } from "./categoria";

export class Produto {
    id:string;
    name:string;
    descricao:string;
    valor:string;
    categoria:Categoria = new Categoria();
    unidade:string;
    estoque:string;
}
