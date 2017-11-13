/*
/**
 * Painel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
    connection: 'mongo',
    attributes: {
      codigo: {
        type: 'string',
        unique: true,
        required: true
      },
      data: {
        type : 'Date',
        required : true
      },
      valorUtilizado:{
        type : 'float',
        required : false
      },
      local:{
        type: 'string',
        required: false
      }
    }
  };
