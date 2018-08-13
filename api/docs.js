/** ****************************************************************************************************
 * File: docs.js
 * Project: boilerplate-express-api
 * @author Nick Soggin <iSkore@users.noreply.github.com> on 31-Oct-2017
 *******************************************************************************************************/
'use strict';

const
	Response = require( 'http-response-class' ),
	{ api }  = require( '../config' );

module.exports = ( req, p ) => {
	return Promise.resolve( api )
		.then( () => ( console.log( p ), api ) )
		.then(
			d => Object.keys( d ).reduce(
				( r, key ) => {
					const
						item    = d[ key ],
						allowed = !item.permissions;

					let tokenAllows = false;

					if( p.token ) {
						tokenAllows = p.token.permissions.includes( item.permissions );
					}

					if( allowed || tokenAllows ) {
						r.push( {
							route: item.route,
							method: item.method,
							authorized: !allowed && tokenAllows
						} );
					}

					return r;
				}, []
			)
		)
		.then(
			d => p.respond( new Response( 200, d ) )
		)
		.catch(
			e => p.error( new Response( 500, e.stackTrace || e.message ) )
		);
};
