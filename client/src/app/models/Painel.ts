import { Chequinho} from './chequinho';
import {Associado} from './associado';

export class Painel{//exportando para a classe do painel os dados das classes chequinho e associado
    id:string;
    chequinho: Chequinho = new Chequinho();
    associado: Associado = new Associado();
}
