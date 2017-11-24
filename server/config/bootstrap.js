/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
var fs = require('fs');
module.exports.bootstrap = function (next) {
	// Em caso de implantação.
	createAdminUsuario();
	//createPaisEstadoCidade();
	next();
};


var readJson = function () {
	var result = {};
	result.estados = JSON.parse(fs.readFileSync('cidades-estados-brasil-json/estados.json', 'utf8'));
	result.cidades = JSON.parse(fs.readFileSync('cidades-estados-brasil-json/cidades.json', 'utf8'));
	return result;
}

/**
 * Verifica se existe países já inseridos, caso não, são inseridos na base de dados.
 */
var createPaisEstadoCidade = function () {
	var obj = readJson();
	Pais.findOrCreate({ nome: 'Basil' }, {
		sigla: 'BR',
		nome: 'Brasil'
	}).exec(function (error, paisCreated) {
		if (error) {
			sails.log(error);
		} else {
			sails.log("Pais OK" + paisCreated.id);

			var estadosAux = _.map(obj.estados, function (value) {
				return {
					nome: value.nome,
					pais: paisCreated.id,
					numero: value.id
				}
			});

			Estado.create(estadosAux).exec(function (err, estadosCreated) {
				if (err) {
					sails.log(err);
				} else {
					sails.log("Estados criados");
					_.forEach(estadosCreated, function (estado) {
						var cidades = _.filter(obj.cidades, function (o) {
							return o.estado === estado.numero;
						});
						cidades = _.map(cidades, function (cidade) {
							return {
								nome: cidade.nome,
								estado: estado.id
							}
						});
						Cidade.create(cidades).exec(function (er, cidadesCriadas) {
							if (er) {
								sails.log(er);
							} else {
								sails.log("Cidades criadas" + cidadesCriadas.length);
							}
						});
					});
				}
			});
		}
	});
};

/**
 * Caso não exista o usuário admin, será criado um.
 */
var createAdminUsuario = function () {
	Usuario.findOrCreate({ email: 'admin@admin.com' }, {
		nome: "admin",
		email: 'admin@admin.com',
		password: 'admin',
		confirmPassword: 'admin',
		empresa: '',
		role: 'ADMIN',
		avatar: ''
	}).exec(function (error, createdOrFoundRecords) {
		if (error) {
			sails.log("Usuário administrador não foi criado", error.errmsg);
		} else {
			sails.log("Usuario admin ok", createdOrFoundRecords.id);
		}
	});
};