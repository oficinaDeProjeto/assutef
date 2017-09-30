/**
 * Endereco.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,
	connection: 'mongo',
	attributes: {
		cidade: {
			model: 'cidade'
		},
		endereco: 'string',
		numero: 'string',
		cep: 'string'
	}
};

