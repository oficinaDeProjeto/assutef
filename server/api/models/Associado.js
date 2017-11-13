/**
 * Associado.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,
	connection: 'mongo',
	attributes: {
		/*pra quando for usar o postgres
		id: {
			type: 'integer',
			autoIncrement: true,
			primaryKey: true
		},*/
		nome: {
			type: 'string',
			required: true,
			unique: true
		},
		email: {
			type: 'string',
			required: true,
			unique: true
		},
		tel: {
			type: 'string',
		},
		cpf: {
			type: 'string',
			unique: true,
		},
		aniversario: {
			type: 'date',
		},
		sexo: {
			type: 'string',
			enum: ['FEMININO', 'MASCULINO']
		},
		endereco: {
			model: 'endereco',
		},
		numero:{
			type: 'number',
			required: false
		},
		ativo:{
			type:"boolean",
			defaultsTo : true
		}
		//createdAt: 'date',
		//updatedAt: 'date',
	}
};

