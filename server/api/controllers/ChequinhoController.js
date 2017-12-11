/**
 * ChequinhoController
 *
 * @description :: Server-side logic for managing chequinhoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findTotalChequinhoByAssociado : (req, res) =>  {
        let idAssociado = req.param('associado')
        Chequinho.find({associado: idAssociado, ativo: true}).sum('valorLimite').then(result => {
            res.json(result)
        }).catch(error => {
            res.json('Não foi possível gerar o total.')
        });
    }
};