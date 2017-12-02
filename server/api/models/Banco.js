/**
 * Banco.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    /*pra o postgres
		id: {
			type: 'integer',
			autoIncrement: true,
			primaryKey: true
		},*/
    descricao: {
			type: 'string',
			required: true,
			unique: true
		},
		codigo: {
			type: 'string',
			required: true,
			unique: true
		}
  }
};

