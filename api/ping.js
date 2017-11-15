/** ****************************************************************************************************
 * File: ping.js
 * Project: boilerplate-express-api
 * @author Nick Soggin <iSkore@users.noreply.github.com> on 31-Oct-2017
 *******************************************************************************************************/
'use strict';
// @formatter:off

const
    Response = require( 'http-response-class' );

module.exports = ( req, p ) => {
    return Promise.resolve()
        .then(
            () => p.respond( new Response( 200, 'pong' ) )
        )
        .catch(
            e => p.error( new Response( 500, e ) )
        );
};