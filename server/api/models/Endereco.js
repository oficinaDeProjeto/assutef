/**
 * Endereco.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,
	connection: 'mongo',
	attributes: {
		bairro:"string",
		cep:"string",
		complemento:"string",
		gia:"string",
		ibge:"string",
		localidade:"string",
		logradouro:"string",
		uf:"string",
		unidade:"string",
		numero:"string"
	}
};

