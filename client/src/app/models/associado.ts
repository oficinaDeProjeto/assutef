import { Endereco } from './endereco';
export class Associado {
    id: string;
    name:string;
    email: string;
    tel: string;
    cpf: string;
    aniversario: Date;
    sexo: string;
    endereco: Endereco = new Endereco();
}
