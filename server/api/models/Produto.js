/**
 * Produto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,
	connection: 'postgres',
	attributes: {
		id: {
			type: 'integer',
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: 'string',
			required: true,
			unique: true
		},
		descricao: {
			type: 'string',
			required: true,
			unique: true
		},
		valor: {
			type: 'string',
			required: true,
			unique: true
		},
		categoria: {
			type: 'string',
			required: true
		},
		unidade: {
			type: 'string',
			required: true,
			unique: true
		},
		estoque: {
			type: 'integer',
			required: true,
			unique: true
		}
  }
};

