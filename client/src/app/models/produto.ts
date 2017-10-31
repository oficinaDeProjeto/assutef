import { Categoria } from "./categoria";

export class Produto {
    id:string;
    nome:string;
    descicao:string;
    valor:string;
    categoria:Categoria;
    unidade:string;
    estoque:string;
}