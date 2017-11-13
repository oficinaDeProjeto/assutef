import { Chequinho} from './chequinho';
import {Associado} from './associado';

export class Painel{
    id:string;
    chequinho: Chequinho = new Chequinho();
    associado: Associado = new Associado();
}
