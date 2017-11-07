/**
 * PlanoConta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
	connection: 'mongo',
  attributes: {
    nomeConta: {
			type: 'string',
			required: true,
			unique: true
		},
		codConta: {
			type: 'string',
			required: true,
			unique: true
		},
		contaMae: {
			type: 'string',
		}
  }
};

