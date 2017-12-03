/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing user
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	create: (req, res) => {
		if (req.body.password !== req.body.confirmPassword) {
			return res.json(401, { err: "Password doesn't match, What a shame!" });
		}
		Usuario.create(req.body).then(usuario => {
			console.log(usuario)
			if (usuario) {
				res.json(200, { usuario: usuario, token: jwToken.issue({ id: usuario.id }) });
			}
		}).catch(err => {
			console.log(err);
			res.forbidden(err);
		});
	}
	
};
