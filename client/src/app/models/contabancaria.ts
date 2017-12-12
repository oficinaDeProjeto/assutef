import { Banco } from "./banco";

export class Contabancaria {
    id:string;
    agencia_numero:string;
    agencia_digito:string;
    conta_numero:string;
    conta_digito:string;
    doc_titular:string;
    banco:Banco = new Banco();
}
