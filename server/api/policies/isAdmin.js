/**
 * isAdmin
 *
 * @module      :: Policy
 * @description :: Um policy que valida se o usuário que está realizando a requisição pertence a 
 *                 ROLE 'admin' e retorna 'true' apenas para este role;
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 * @author      :: Lucas Henrique de Abreu <lucas.viasoft.com.br>
 * @date		:: 05/09/2017
 */
module.exports = function(req, res, next) {
	if (validRole.confirmRole("ADMIN",false, req)) {
        return next();
    } else {
        return res.forbidden("Este usuário não tem permissão de acesso.");
    }
};
