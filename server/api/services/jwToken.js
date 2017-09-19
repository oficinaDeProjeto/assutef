/**
 * jwToken
 *
 * @description :: JSON Webtoken Service for sails
 * @help        :: See https://github.com/auth0/node-jsonwebtoken & http://sailsjs.org/#!/documentation/concepts/Services
 */

var jwt = require("jsonwebtoken"),
	tokenSecret = "secretissecet";

// Generates a token from supplied payloadGenerates a token from supplied payload
module.exports.issue = function(payload) {
	return jwt.sign(
		payload,
		tokenSecret, // Token Secret that we sign it with
		{
			expiresIn : 60*60*24 // Token Expire time
		}
	);
};

// Verifies token on a request
module.exports.verify = function(token, callback) {
	return jwt.verify(
		token, // The token to be verified
		tokenSecret, // Same token we used to sign
		{}, // No Option, for more see https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
		callback //Pass errors or decoded token to callback
	);
};

// Verifies token on a request
module.exports.getIdUserByToken = function(token) {
	var aux = jwt.decode(token, {complete: true});
	return aux.payload.id;
};
