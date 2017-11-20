/**
 * GeneralController
 *
 * @description :: Server-side logic for managing Generals
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
let request = require('request');

module.exports = {
    getAddressByPostalCode: (req, res) => {
        let postalCode = req.param('postalcode');
        let url = 'https://viacep.com.br/ws/${postalCode}/json/'
        request.get({ url: url }, (error, response, body) => {
            if (error) {
                sails.log.error(error);
            } else {
                res.send(body);
            }
        });
    },
    getDataEmpresaByCnpj: (req, res) => {
        let postalCode = req.param('cnpj');
        let url = `https://www.receitaws.com.br/v1/cnpj/${postalCode}/json/`
        request.get({ url: url }, (error, response, body) => {
            if (error) {
                sails.log.error(error);
            } else {
                res.send(body);
            }
        });
    }
};
