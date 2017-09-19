/**
 * Proficional.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,
	connection: 'mongo',

	attributes: {
		name: {
			type: 'string',
			required: true
		},
		email: {
			type: 'string',
			required: true
		},
		endereco: {
			collection: 'endereco',
			via: 'proficional'
		},
		foto: {
			model:'foto'
		},
		ramoatividade: {
			model:'ramoatividade'
		}
	}
};

