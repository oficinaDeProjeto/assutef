module.exports = {

  attributes: {
    schema: true,
    connection: 'postgres',
    agencia_numero: {
      type: 'string',
      required: true
    },
    agencia_digito: {
      type: 'string',
      required: true
    },
    conta_numero: {
      type: 'string',
      required: true
    },
    conta_digito: {
      type: 'string',
      required: true
    },
    doc_titular: {
      type: 'string',
      required: true
    },
    banco: {
			model: 'banco',
			required: true
		}
  }
};
