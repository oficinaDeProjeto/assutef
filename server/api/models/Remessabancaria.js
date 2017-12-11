module.exports = {

  attributes: {
    //schema: true,
    connection: 'postgres',
    agencia_cobradora: {
      type: 'string',
      required: true
    },
    codigo_comando: {
      type: 'string',
      required: true
    },
    carteira_cobranca: {
      type: 'string',
      required: true
    },
    cod_responsabilidade: {
      type: 'string',
      required: true
    },
    taxa_juro_mensal: {
      type: 'string',
      required: true
    },
    num_bordero: {
      type: 'string',
      required: true
    },
    variacao: {
      type: 'string',
      required: true
    },
    dias_baixa: {
      type: 'string',
      required: true
    },
    especie_doc: {
      type: 'string',
      required: true
    },
    num_contrato_pagto: {
      type: 'string',
      required: true
    },
    num_contrato_receb: {
      type: 'string',
      required: true
    },
    contabancaria: {
			model: 'contabancaria',
			required: true
		}
  }
};
