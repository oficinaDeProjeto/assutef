import {Associado} from './associado';
export class Chequinho {
    id: string;
    numero: number;
    valorLimite : number;
    valorUtilizado : number;
    associado: Associado = new Associado;
    data: Date;    
}
