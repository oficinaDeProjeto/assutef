import { Tipoconveniado } from "./tipoconveniado";
import { Endereco } from "./endereco";
import { Contacorrente } from "./contacorrente";

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
    contacorrente: Contacorrente = new Contacorrente();
    tipoconveniado: Tipoconveniado;
}