import { Banco } from "./banco";

export class Contacorrente {
    id:string;
    nome:string;
    nrConta:string;
    agencia:string;
    banco: Banco;
    //planoConta: Planoconta;
}