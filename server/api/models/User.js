/**
 * User.js
 *
 * @description :: Entidade que representa o objeto de usuário no banco de dados
 * @docs        :: http://sailsjs.org/#!documentation/models
 * @author      :: Lucas Henrique de Abreu <lucasigual14@gmail.com>
 * @date		:: 05/09/2017
 * TODO - VERIFICAR UMA FORMA DE NÃO PODER CADASTAR USUÁRIO ADMIN, TALBEZ NO CONTROLLER
 */

var bcrypt = require("bcrypt");

module.exports = {
	schema: true,
	connection: "mongo",

	attributes: {
		email: {
			type: "string",
			required: "true",
			unique: true
		},
		name: {
			type: "string",
			required: true
		},
		encryptedPassword: {
			type: "string"
		},
		role: {
			type: 'string',
			enum: ['ADMIN', 'USER'],
			required: "true",
		},
		avatar: {
			model:'foto',
			unique: true
		},
		
		// Para não enviar uma senha criptografada
		toJSON: function () {
			var obj = this.toObject();
			delete obj.encryptedPassword;
			return obj;
		}
	},
	// Criptografa a senha antes de criar o usuário.
	beforeCreate: function (values, next) {
		bcrypt.genSalt(10, function (err, salt) {
			if (err) return next(err);
			bcrypt.hash(values.password, salt, function (err, hash) {
				if (err) return next(err);
				values.encryptedPassword = hash;
				next();
			});
		});
	},

	comparePassword: function (password, user, cb) {
		bcrypt.compare(password, user.encryptedPassword, function (err, match) {
			if (err) cb(err);
			if (match) {
				cb(null, true);
			} else {
				cb(err);
			}
		});
	}
};
