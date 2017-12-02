/**
 * Contacorrente.js
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
    nome: {
			type: 'string',
			required: true,
			unique: true
		},
		nrConta: {
			type: 'string',
			required: true
		},
		agencia: {
			type: 'string',
			required: true
		},
		banco: {
			model: 'banco',
			required: true
		}
  }
};

