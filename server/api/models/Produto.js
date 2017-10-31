/**
 * Produto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,
	connection: 'mongo',
	attributes: {
		nome:{
			type:'string',
			unique:true,
			required:true
		},
		descricao:{
			type:'string',
			unique:true,
			required:true
		},
		valor:{
			type:'string',
			unique:true,
			required:true
		},
		categoria:{
			model: "categoria",
			required: true
		},
		unidade:{
			type:'string',
			unique:true,
			required:true
		},
		estoque:{
			type:'string',
			unique:true,
			required:true
		}
	}
};

