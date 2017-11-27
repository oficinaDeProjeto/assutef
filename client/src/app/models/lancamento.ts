import { Associado } from './associado';
import { Conveniado } from './conveniado';
export class Lancamento {
    id: string;
    valor: number;
    dataLancamento: Date;
    conveniado: Conveniado;
    associado: Associado;
}
