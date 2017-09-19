/**
 * Services gerais.
 * @author: Lucas Henrique de Abreu <lucasigual14@gmail.com>
 * @date: 26/07/2017
 */
var request = require('request');
var Promise = require('bluebird');

module.exports = {

	/**
	 * Busca um enderço pelo cep.
	 * @param {*} postalCode 
	 */
	getAddressByPostalCode: function (postalCode) {
		var url = "https://viacep.com.br/ws/"+postalCode+"/json/";
		
		return new Promise(function(resolve, reject){
			request.get({url:url}, function(error, response, body) {
				if (error) {
					sails.log.error(error);
				} else {
					return resolve(response.results);
				}
			});
		});
	}	
}