/**
 * Services gerais.
 * @author: Lucas Henrique de Abreu <lucasigual14@gmail.com>
 * @date: 26/07/2017
 */
let request = require('request');
let Promise = require('bluebird');

module.exports = {

	/**
	 * Busca um enderço pelo cep.
	 * @param {*} postalCode 
	 */
	getAddressByPostalCode: (postalCode) => {
		let url = "https://viacep.com.br/ws/"+postalCode+"/json/";
		
		return new Promise((resolve, reject) => {
			request.get({url:url}, (error, response, body) => {
				if (error) {
					sails.log.error(error);
				} else {
					return resolve(response.results);
				}
			});
		});
	},

	/**
	 * Busca uma empresa pelo cpf
	 */
	getDataEmpresaByCnpj: (cnpj) => {
		let url = "https://viacep.com.br/ws/"+postalCode+"/json/";
		return new Promise((resolve, reject) => {
			request.get({url:url}, (error, response, body) => {
				if (error) {
					sails.log.error(error);
				} else {
					return resolve(response.results);
				}
			});
		});
	}
}