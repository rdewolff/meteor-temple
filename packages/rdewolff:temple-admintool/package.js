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
  api.imply('templating');
  // api.use(['templating'], 'client');
  // api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles('menu.html', 'client');
  api.addFiles('menu.js', 'client');
  api.addFiles('rdewolff:temple-admintool.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rdewolff:temple-admintool');
  api.addFiles('rdewolff:temple-admintool-tests.js');
});
