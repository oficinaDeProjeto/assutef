/**
 * Activation.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,
	connection: 'mongo',
	attributes: {
		id_usuario: {
			model: 'usuario',
		},
		token: 'string',
		url: 'string',
		activated: 'integer',
		createdAt: 'date',
		updatedAt: 'date',
	}
};

