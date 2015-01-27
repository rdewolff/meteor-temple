Package.describe({
  name: 'rdewolff:temple-admintool',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'test',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.0.3.1');

  api.imply([
    'meteor',
    'templating',
    'iron:router',
    'mongo'
  ]);

  api.use(['meteor', 'iron:router', 'templating', 'mongo'], ['client', 'server']);

  // client & server, all architectures
  api.addFiles('rdewolff:temple-admintool.js');
  api.addFiles('routes.js');

  // server only

  // client only
  api.addFiles('client/views/adminHome.html', 'client');
  api.addFiles('client/views/adminHome.js', 'client');
  api.addFiles('client/views/menu.html', 'client');
  api.addFiles('client/views/menu.js', 'client');
  api.addFiles('client/views/properties.js', 'client');
  api.addFiles('client/views/properties.html', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rdewolff:temple-admintool');
  api.addFiles('rdewolff:temple-admintool-tests.js');
});
