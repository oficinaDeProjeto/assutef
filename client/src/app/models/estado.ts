import { Cidade } from './cidade';
import { Pais } from './pais';
export class Estado {
    nome: string;
    numero: string;
    pais: Pais;
    cidades: Cidade[];
}
