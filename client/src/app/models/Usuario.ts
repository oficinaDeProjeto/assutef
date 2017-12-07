import { Grupousuario } from "./Grupousuario";

export class Usuario {
    id: string;
    nome: string;
    email: string;
    role: string;
    grupo: Grupousuario = new Grupousuario();
    password: string;
    confirmPassword: string;
}
