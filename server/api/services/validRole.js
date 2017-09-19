/**
 * Valide Role
 *
 * @description :: Valida a role é a mesma do token passado por paramentro. 
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Services
 */

var Promise = require('bluebird');


// Generates a token from supplied payloadGenerates a token from supplied payload
module.exports.confirmRole = function(role,only, req) {
	var token, idUser;
	
	if (req.headers && req.headers.authorization) {
		var parts = req.headers.authorization.split(" ");
		var scheme = parts[0],
			credentials = parts[1];

		if (/^Bearer$/i.test(scheme)) {
			token = credentials;
		}
	}
	idUser = jwToken.getIdUserByToken(token);

	return new Promise( function( resolve, reject )	{
		var result = false;
		User.findOne({
			id: idUser
		}).exec(function(err, user) {
			if (err) {
				sails.log("Erro:" + err);
				resolve(false);
			}
			if (!user) {
				sails.log("Usuário não encontrado");
				resolve(false);
			}
			//**Vaida os níveis */
			if (!only) {
				switch (role) {
					case 'ADMIN':
						result = user.role === role;
						break;
					case 'USER':
						result = user.role === role || user.role === 'ADMIN';
						break;
					default:
						result = false;
						break;
				}
			} else {
				result = user.role === role;
			}
			return resolve(result);
		});
	});
};
