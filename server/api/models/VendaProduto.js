/**
 * VendaProduto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    schema: true,
    connection: 'postgres',
    attributes: {
        venda: {
            model: 'Venda',
            required: true
        },
        produto: {
            model: 'Produto',
            required: true
        },
        sku: {
            type: 'string'
        },
        quantidade: {
            type: 'string',
            required: true
        },
        valor: {
            type: 'string',
            required: true   
        }
    }
  };
  
  