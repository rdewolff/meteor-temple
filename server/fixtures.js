/**
 * System
 */
 // TODO: split system (core) and custom (customer)
 // TODO: use with()
// properties
System['properties'].remove({});
if (System['properties'].find().count() === 0) {
  System['properties'].insert({ "name" : "URL", "value" : "http://", });
  System['properties'].insert({ "name" : "CustomerName", "value" : "zetcom", });
  System['properties'].insert({ "name" : "Languages", "value" : "EN, FR, DE", });
  System['properties'].insert({ "name" : "RemoteUrl", "value" : "193.23.12.98", });
  System['properties'].insert({ "name" : "RemoteCollectionsbase", "value" : "emp", });
  System['properties'].insert({ "name" : "RemoteUsername", "value" : "emp-admin", });
  System['properties'].insert({ "name" : "RemotePassword", "value" : "287sdkjw398ad2", });
  System['properties'].insert({ "name" : "elementPerPage", "value" : "10, 25, 50, 100", });
}

// views
System['views'].remove({});
if (System['views'].find().count() === 0) {
  System['views'].insert({
    name: 'list'
  });
  System['views'].insert({
    name: 'detail'
  });
  System['views'].insert({
    name: 'search'
  });
}

// labels
System['labels'].remove({});
if (System['labels'].find().count() === 0) {
  System['labels'].insert({
    name: 'Title', // the idea is to have the internal name
    field: '123',
    language: 'EN',
    value: 'Title'
  });
}

/**
 * Collections
 */

// objects
if ( Collections['objects'].find().count() === 0 ) {
  Collections['objects'].insert({
    title: 'Jagged Lines',
    date: 2010,
    description: 'Video (DVD)'
  });
  Collections['objects'].insert({
    title: 'Faux facade',
    date: 2011,
    dimension: '150x140x210 cm',
    description: 'Graue Safari-Baumwollköper in Lattengerüst'
  });
}

// artists
if ( Collections['artists'].find().count() === 0 ) {
  Collections['artists'].insert({
    firstname: 'Kaspar',
    lastname: 'Bucher',
    nationality: 'CH',
    email: 'ratkinson@test.com',
    url: 'www.kasparbucher.ch'
  });
  Collections['artists'].insert({
    firstname: 'Robert',
    lastname: 'Atkinson',
    email: 'ratkinson@test.com'
  });
  Collections['artists'].insert({
    firstname: 'John',
    lastname: 'Doe',
    email: 'jdoe@test.com'
  });
  Collections['artists'].insert({
    firstname: 'Melinda',
    lastname: 'Jones',
    email: 'melinda.jones@gmail.com'
  });
}

// exhibitions
if ( Collections['exhibitions'].find().count() === 0 ) {
  Collections['exhibitions'].insert({
    title: 'Visarte Galerie Program',
    location: 'Bern, Switzerland',
    date: 2010
  });
  Collections['exhibitions'].insert({
    title: 'Ostrale 08',
    location: 'Dresden, Germany',
    date: 2008
  });
  Collections['exhibitions'].insert({
    title: 'Restaurant Schwellenmätteli',
    location: 'Bern, Switzerland',
    date: 2002
  });
}
