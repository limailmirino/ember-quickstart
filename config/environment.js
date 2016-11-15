/* jshint node: true */

module.exports = function(environment) {

  var ENV = {

		title: 'My Sweet App',
		description: 'This app is sweet',
		analytics: {
			google_analytics_id: 'UA-abc123-x',
		},

		modulePrefix: 'ember-quickstart',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',

		EmberENV: {

      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true

			},
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }

/*		,

    contentSecurityPolicy: {
      //'style-src': "'self' 'unsafe-inline'",
      //'script-src': "'self' 'unsafe-eval' 192.168.1.33:35729",
      'default-src': "'none'",
      'font-src': "'self'",
      'img-src': "'self'",
      'media-src': "'self'",
      'style-src': "'self' 'unsafe-inline'",
      'script-src': "'self' 'unsafe-eval' http://localhost:8765",
      'connect-src': "'self' http://localhost:8765"
    }*/

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
