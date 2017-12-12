import { Usuario } from './Usuario';
import { Endereco } from './endereco';
export class Associado {
    id: number;
    nome:string;
    email: string;
    tel: string;
    cpf: string;
    aniversario: Date;
    sexo: string;
    endereco: Endereco = new Endereco();
    usuario: Usuario;
    valorLimite: number;
}
