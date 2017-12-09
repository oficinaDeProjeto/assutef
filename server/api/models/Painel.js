/*
/**
 * Painel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
    connection: 'postgres',
    attributes: {
      codigo: {
        type: 'string',
        unique: true,
        required: true
      },
      /*
      conveniado:{
        model: 'conveniado'
      },
      valorUtilizado:{ //valor utilizado real do chequinho
        model: 'chequinho'
      },
      data: { //dt geracao chequinho
       model: 'chequinho'
      },*/
      chequinho:{
        model: 'chequinho',
        required: true
      },

      lancamento:{
        model:'lancamento',
        required: true
      },
      
      conveniado:{
        model:'conveniado',
        required:true
      }
    }
  };
