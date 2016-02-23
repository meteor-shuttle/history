Package.describe({
  name: 'shuttle:history',
  version: '0.0.1',
  summary: 'Server logging of native and custom events with additional data.',
  git: 'https://github.com/meteor-shuttle/history',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  
  api.use('mongo');
  api.use('ecmascript');
  api.use('accounts-base');
  
  api.use('dburles:collection-helpers@1.0.4');
  api.use('aldeed:collection2@2.9.0');
  api.use('shuttle:ref@0.0.0');
  
  api.addFiles('History.js');
  api.addFiles('helpers.js');
  api.addFiles('Schema.js');
  
  api.export('Shuttle');
});