/**
 * Lancamento.js
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
		valor: {
			type : 'float',
			required : true
		},
		dataLancamento: {
			type : 'Date',
			required : true
		},
		conveniado: {
			model: 'conveniado',
			required: true
		},
		associado: {
			model: 'associado',
			required: true			
		}
	}
};

