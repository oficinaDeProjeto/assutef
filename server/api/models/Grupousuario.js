/**
 * Grupousuario.js
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
		}
		
	}
};

