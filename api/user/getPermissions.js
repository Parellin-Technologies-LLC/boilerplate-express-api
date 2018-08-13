/** ****************************************************************************************************
 * File: getPermissions.js
 * Project: boilerplate-express-api
 * @author Nick Soggin <iSkore@users.noreply.github.com> on 20-Nov-2017
 *******************************************************************************************************/
'use strict';

const
	Response = require( 'http-response-class' );

module.exports = ( req, p ) => {
	return Promise.resolve()
		.then(
			() => p.respond( new Response( 200, p.token.permissions ) )
		)
		.catch(
			e => p.error( new Response( 500, e.stackTrace || e.message ) )
		);
};
