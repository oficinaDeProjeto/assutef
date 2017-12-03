import { Banco } from "./banco";
import { PlanoConta } from "./planoConta";

export class Contacorrente {
    id:string;
    nome:string;
    nrConta:string;
    agencia:string;
    banco: Banco;
    planoConta: PlanoConta;
}