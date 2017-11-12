import { Tipoconveniado } from "./tipoconveniado";
import { Endereco } from "./endereco";

export class Conveniado {
    id: string;
    razaosocial:string;
    nomefantasia: string;
    ativo: string;
    comissao: string;
    cnpj: string;
    telefone: string;
    datacadastro: Date;
    endereco: Endereco = new Endereco();
    tipoconveniado: Tipoconveniado;
}