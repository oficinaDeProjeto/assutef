/**
 * Venda.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    schema: true,
    connection: 'postgres',
    attributes: {
        associado: {
          model: 'Associado'
        },
        total: {
          type: 'string',
          required: true
        },
        produtos: {
          collection: 'VendaProduto',
          via: 'venda',
          required: true
        },
        data: {
          type: 'string',
          required: true
        }
    }
};

