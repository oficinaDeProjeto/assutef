/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function (req, res) {
		var email = req.param("email");
		var password = req.param("password");

		if (!email || !password) {
			return res.json(401, { err: "E-mail e senha são necessários" });
		}

		Usuario.findOne({ email: email }).then(function (user) {
			Usuario.comparePassword(password, user, function (err, valid) {
				if (err) {
					return res.json(403, { err: "forbidden" });
				}

				if (!valid) {
					return res.json(401, { err: "E-mail ou senha inválidos" });
				} else {
					res.json({
						token: jwToken.issue({ id: user.id })
					});
				}
			})
		}).catch(function (err) {
			return res.json(401, { err: "E-mail ou senha inválidos!" });
		})
	},
	getusuariobytoken: function (req, res) {
		var token, idUsuario;
		if (req.headers && req.headers.authorization) {
			var parts = req.headers.authorization.split(" ");
			var scheme = parts[0],
				credentials = parts[1];

			if (/^Bearer$/i.test(scheme)) {
				token = credentials;
			}
		}
		idUsuario = jwToken.getIdUsuarioByToken(token);
		Usuario.findOne({ id: idUsuario }).then(function (user) {
			if (!user) {
				return res.json(401, { err: "Usuário não encontrado!" });
			} else {
				return res.json(user);
			}
		}).catch(function(err){
			return res.json(403, { err: err });
		});
	}
};
