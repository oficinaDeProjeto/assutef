import {Associado} from './associado';
export class Chequinho {
    id: string;
    valorLimite : number;
    valorUtilizado : number;
    associado: Associado = new Associado;
    data: Date;    
}
