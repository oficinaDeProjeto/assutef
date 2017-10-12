/**
 * Conveniado.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
	connection: 'mongo',
  attributes: {
    razaosocial: {
			type: 'string',
			required: true,
			unique: true
		},
		nomefantasia: {
			type: 'string',
			required: true,
			unique: true
		},
		telefone: {
			type: 'string',
		},
		cgc: {
			type: 'string',
			unique: true,
		},
		comissao: {
			type: 'string',
			unique: true,
    },
		ativo: {
			type: 'string',
			enum: ['Ativo', 'Inativo']
		},
		endereco: {
			model: 'endereco'
    },
    cidade: {
      model: 'cidade'
		},
		tipoconveniado:{
			model: 'tipoconveniado'
		}
  }
};

