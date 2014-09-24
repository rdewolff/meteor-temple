/**
 * System
 */
 // TODO: split system (core) and custom (customer)
// properties
SysProperties.remove({});
if (SysProperties.find().count() === 0) {
  SysProperties.insert({ "name" : "URL", "value" : "http://", });
  SysProperties.insert({ "name" : "CustomerName", "value" : "zetcom", });
  SysProperties.insert({ "name" : "Languages", "value" : "EN, FR, DE", });
  SysProperties.insert({ "name" : "RemoteUrl", "value" : "193.23.12.98", });
  SysProperties.insert({ "name" : "RemoteDatabase", "value" : "emp", });
  SysProperties.insert({ "name" : "RemoteUsername", "value" : "emp-admin", });
  SysProperties.insert({ "name" : "RemotePassword", "value" : "287sdkjw398ad2", });
  SysProperties.insert({ "name" : "elementPerPage", "value" : "10, 25, 50, 100", });
}

// modules
SysModules.remove({});
if (SysModules.find().count() === 0) {
 SysModules.insert({
   name: 'collection'
 });
 SysModules.insert({
   name: 'artist'
 });
 SysModules.insert({
   name: 'exhibition'
 });
}

// views
SysViews.remove({});
if (SysViews.find().count() === 0) {
  SysViews.insert({
    name: 'list'
  });
  SysViews.insert({
    name: 'detail'
  });
  SysViews.insert({
    name: 'search'
  });
}

// labels
SysLabels.remove({});
if (SysLabels.find().count() === 0) {
  SysLabels.insert({
    name: 'Title', // the idea is to have the internal name
    field: '123',
    language: 'EN',
    value: 'Title'
  });
}

/**
 * Data
 */

// objects
if ( Objects.find().count() === 0 ) {
  Objects.insert({
    title: 'Jagged Lines',
    date: 2010,
    description: 'Video (DVD)'
  });
  Objects.insert({
    title: 'Faux facade',
    date: 2011,
    dimension: '150x140x210 cm',
    description: 'Graue Safari-Baumwollköper in Lattengerüst'
  });
}

// artists
if ( Artists.find().count() === 0 ) {
  Artists.insert({
    firstname: 'Kaspar',
    lastname: 'Bucher',
    nationality: 'CH',
    email: 'ratkinson@test.com',
    url: 'www.kasparbucher.ch'
  });
  Artists.insert({
    firstname: 'Robert',
    lastname: 'Atkinson',
    email: 'ratkinson@test.com'
  });
  Artists.insert({
    firstname: 'John',
    lastname: 'Doe',
    email: 'jdoe@test.com'
  });
  Artists.insert({
    firstname: 'Melinda',
    lastname: 'Jones',
    email: 'melinda.jones@gmail.com'
  });
}

// exhibitions
if ( Exhibition.find().count() === 0 ) {
  Exhibition.insert({
    title: 'Visarte Galerie Program',
    location: 'Bern, Switzerland',
    date: 2010
  });
  Exhibition.insert({
    title: 'Ostrale 08',
    location: 'Dresden, Germany',
    date: 2008
  });
  Exhibition.insert({
    title: 'Restaurant Schwellenmätteli',
    location: 'Bern, Switzerland',
    date: 2002
  });
}
