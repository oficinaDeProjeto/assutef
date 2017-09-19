/**
 * Estado.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,
	connection: 'mongo',
	attributes: {
		nome: {
			type: 'string',
			required: true,
			unique: true
		},
		numero: {
			type: 'string',
			required: true,
			unique: true
		},
		pais: {
			model: "pais",
			required: true
		},
		cidades: {
			collection: 'cidade',
			via: 'estado'
		}
	}
};