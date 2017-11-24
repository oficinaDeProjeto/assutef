/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index:  (req, res) => {
		let email = req.param("email");
		let password = req.param("password");

		if (!email || !password) {
			return res.ok("E-mail e senha são necessários");
		}

		Usuario.findOne({ email: email }).then( (user) => {
			Usuario.comparePassword(password, user,  (err, valid) => {
				if (err) {
					return res.ok("E-mail ou senha inválidos");
				}

				if (!valid) {
					return res.ok("E-mail ou senha inválidos");
				} else {
					res.json({
						token: jwToken.issue({ id: user.id })
					});
				}
			})
		}).catch( (err) => {
			return res.ok("E-mail ou senha inválidos!");
		})
	},
	getusuariobytoken:(req, res) => {
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
		console.log(idUsuario)
		Usuario.findOne({ id: idUsuario }).then( (user) => {
			if (!user) {
				return res.ok( "Usuário não encontrado!" );
			} else {
				console.log(user);
				return res.ok(user);
			}
		}).catch((err) => {
			return res.forbidden(err);
		});
	}
};
