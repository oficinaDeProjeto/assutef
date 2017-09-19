/**
 * GeneralController
 *
 * @description :: Server-side logic for managing Generals
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var request = require('request');

module.exports = {
    getAddressByPostalCode: function (req, res) {
        var postalCode = req.param('postalcode');
        var url = "https://viacep.com.br/ws/" + postalCode + "/json/"
        request.get({ url: url }, function (error, response, body) {
            if (error) {
                sails.log.error(error);
            } else {
                res.send(body);
            }
        });
    }
};
