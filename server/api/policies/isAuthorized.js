/**
 * isAuthorized
 *
 * @description :: Política para verificar se o usuário está autorizado com o token da Web JSON
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Policies
 * @author      :: Lucas Henrique de Abreu <lucas.viasoft.com.br>
 * @date		:: 05/09/2017
 */

module.exports = function (req, res, next) {
	var token;

	if (req.headers && req.headers.authorization) {
		var parts = req.headers.authorization.split(" ");
		if (parts.length == 2) {
			var scheme = parts[0],
				credentials = parts[1];

			if (/^Bearer$/i.test(scheme)) {
				token = credentials;
			}
		} else {
			return res.json(401, { err: "Format is Authorization: Bearer [token]" });
		}
	} else if (req.param("token")) {
		token = req.param("token");
		// We delete the token from param to not mess with blueprints
		delete req.query.token;
	} else {
		return res.json(401, { err: "No Authorization header was found" });
	}

	jwToken.verify(token, function (err, token) {
		if (err) return res.json(401, { err: "Invalid Token!" });
		req.token = token; // This is the decrypted token or the payload you provided
		next();
	});
};
