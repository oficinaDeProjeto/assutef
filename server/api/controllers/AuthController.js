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

		User.findOne({ email: email }).then(function (user) {
			User.comparePassword(password, user, function (err, valid) {
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
	getUserLogged: function (req, res) {
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
		return new Promise(function (resolve, reject) {
			var result = false;
			User.findOne({ id: idUser }).then(function (user) {
				if (!user) {
					return res.json(404, { err: "Usuário não encontrado" });
				} else {
					return res.json(user);
				}
			}).catch(function (err) {
				return res.json(404, { err: "Usuário não encontrado" });
			});
		});
	}
};
