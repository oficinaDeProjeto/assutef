/**
 * Usuario.js
 *
 * @description :: Entidade que representa o objeto de usuário no banco de dados
 * @docs        :: http://sailsjs.org/#!documentation/models
 * @author      :: Lucas Henrique de Abreu <lucasigual14@gmail.com>
 * @date		:: 05/09/2017
 * TODO - VERIFICAR UMA FORMA DE NÃO PODER CADASTAR USUÁRIO ADMIN, TALBEZ NO CONTROLLER
 */

const bcrypt = require("bcrypt");

module.exports = {
	schema: true,
	connection: "mongo",

	attributes: {
		email: {
			type: "string",
			required: "true",
			unique: true
		},
		nome: {
			type: "string",
			required: true
		},
		password: {
			type: "string"
		},
		role: {
			type: 'string',
			enum: ['ADMIN', 'USER', 'ASSOCIADO'],
			required: "true",
		},		
		// Para não enviar uma senha criptografada
		toJSON:  function() {
			var obj = this.toObject();
			delete obj.password;
			return obj;
		}
	},
	// Criptografa a senha antes de criar o usuário.
	beforeCreate:  (values, next) =>{
		bcrypt.genSalt(10,  function(err, salt){
			console.log(salt)
			console.log(values)
			if (err) return next(err);
			bcrypt.hash(values.password, salt,  (err, hash) =>{
				if (err) return next(err);
				values.password = hash;
				next();
			});
		});
	},
	beforeUpdate: (values, next) => {
		if(typeof values.password === 'undefined')
			return next();
		if(values.password != null){
			bcrypt.genSalt(10, function(err, salt) {
				if (err) return next(err);
				bcrypt.hash(values.password, salt,  (err, hash) =>{
					if (err) return next(err);
					values.password = hash;
				});
			});
		}
		next();
	},
	comparePassword:  (password, user, next) =>{
		bcrypt.compare(password, user.password,  (err, match) =>{
			if (err) next(err);
			if (match) {
				next(null, true);
			} else {
				next(err);
			}
		});
	}
};
