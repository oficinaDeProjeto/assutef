import { Cidade } from 'app/models/cidade';
import { Endereco } from 'app/models/endereco';
import { Tipoconveniado } from 'app/models/tipoConveniado';
export class Conveniado {
    id: string;
    razaosocial:string;
    nomefantasia: string;
    ativo: string;
    comissao: string;
    cgc: string;
    telefone: string;
    endereco: Endereco;
    cidade: Cidade;
    tipoconveniado: Tipoconveniado;
}