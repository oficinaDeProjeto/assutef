import { Associado } from './associado';
export class Lancamento {
    id: string;
    valor: number;
    dataLancamento: Date;
    empresa: string;
    associado: Associado;
}
