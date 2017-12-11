import { Categoria } from "./categoria";

export class Produto {
    id:string;
    name:string;
    descricao:string;
    valor:number;
    categoria:Categoria = new Categoria();
    unidade:string;
    estoque:number;
}
