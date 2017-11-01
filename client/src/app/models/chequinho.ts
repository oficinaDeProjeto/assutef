import {Associado} from './associado';
export class Chequinho {
    id: number;
    valorLimite : number;
    valorUtilizado : number;
    associado: Associado;
    data: Date;
    codigoDeBarras : number;
}
