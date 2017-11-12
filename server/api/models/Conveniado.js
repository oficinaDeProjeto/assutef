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
		/*pra o postgres
		id: {
			type: 'integer',
			autoIncrement: true,
			primaryKey: true
		},*/
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
		cnpj: {
			type: 'string',
			unique: true,
		},
		comissao: {
			type: 'string',
			unique: true,
		},
		datacadastro: {
			type: 'date',
		},
		ativo:{
			type:"boolean",
			defaultsTo : true
		},
		endereco: {
			model: 'endereco'
    },
		tipoconveniado:{
			model: 'tipoconveniado'
		}
  }
};

