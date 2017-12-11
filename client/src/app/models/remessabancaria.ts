import { Contabancaria } from "./contabancaria";

export class Remessabancaria {
    id:string;
    agencia_cobradora:string;
    codigo_comando:string;
    cod_responsabilidade:string;
    taxa_juro_mensal:string;
    num_bordero:string;
    variacao:string;
    dias_baixa:string;
    especie_doc:string;
    num_contrato_pagto:string;
    num_contrato_receb:string;
    contabancaria:Contabancaria = new Contabancaria();
}