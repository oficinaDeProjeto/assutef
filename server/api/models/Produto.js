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
			required: true
		},
		descricao: {
			type: 'string',
			required: true
		},
		valor: {
			type: 'string',
			required: true
		},
		categoria: {
			model: 'categoria',
			/*type: 'string',*/
			required: true
		},
		unidade: {
			type: 'string',
			required: true
		},
		estoque: {
			type: 'string',
			required: true
		}
  }
};

