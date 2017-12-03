/**
 * PlanoConta.js
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
    nomeConta: {
			type: 'string',
			required: true,
		},
		codConta: {
			type: 'string',
			required: true,
			unique: true
		},
		contaMae: {
			type: 'string'
		},
		natureza: {
			type: 'string',
			enum: ['C', 'D']
		}
	}	
};

