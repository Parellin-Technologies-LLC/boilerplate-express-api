/** ****************************************************************************************************
 * @file: index.js
 * Project: boilerplate-express-api
 * @author Nick Soggin <iSkore@users.noreply.github.com> on 30-OCT-2017
 *******************************************************************************************************/
'use strict';

const
	gonfig = require( 'gonfig' );

// setup environment config
gonfig
	.setLogLevel( gonfig.LEVEL.BASIC )
	.setEnvironment( process.env.NODE_ENV || gonfig.ENV.DEVELOPMENT )
	.load( 'server', 'config/server.json' )
	.load( 'api', 'config/api.json' )
	.refresh();

const
	initEnv = require( './lib/init' ),
	server  = require( './lib/server' );

( async () => {
	// do any initialization steps here
	await initEnv();
	
	// start the server
	server
		.initialize()
		.start();
} )();