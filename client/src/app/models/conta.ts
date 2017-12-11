import { PlanoConta } from './planoConta';
export class Conta {
    id: string;
    data: Date;
    contaReceita: PlanoConta;
    contaDespesa: PlanoConta;
    valor: string;
}
