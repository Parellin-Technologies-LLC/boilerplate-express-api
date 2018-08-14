/** ****************************************************************************************************
 * @file: signup.js
 * @project: boilerplate-express-api
 * @author Nick Soggin <iSkore@users.noreply.github.com> on 14-Aug-2018
 *******************************************************************************************************/
'use strict';

const
	Response       = require( 'http-response-class' ),
	argon2         = require( 'argon2' ),
	Authentication = require( '../../lib/Authentication' ),
	{
		User,
		validate
	}              = require( '../../lib/structs' );

module.exports = ( req, p ) => {
	return validate( User, p.data )
		.then(
			d => argon2.hash( d.password, { type: argon2.argon2id } )
				.then( pass => ( d.password = pass, d ) )
		)
		.then( d => Authentication.signUp( d ) )
		.then( d => p.respond( d ) )
		.catch( e => p.respond( new Response( e.statusCode || 500, e.data || e.stack || e.message || e ) ) )
};
