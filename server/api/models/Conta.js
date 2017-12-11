/**
 * Conta.js
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
		data: {
			type : 'Date',
			required : true
		},
		valor:{			
			type : 'float',
			required : true
		},
		contaReceita: {
			model: 'planoconta',
			required: true
		},
		contaDespesa: {
			model: 'planoconta',
			required: true
		}
		}
};

