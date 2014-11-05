/**
 * TempleSystem
 */
 // TODO: split TempleSystem (core) and custom (customer)
 // TODO: use with()
// properties
TempleSystem['properties'].remove({});
if (TempleSystem['properties'].find().count() === 0) {
  TempleSystem['properties'].insert({ "name" : "URL", "value" : "http://", });
  TempleSystem['properties'].insert({ "name" : "CustomerName", "value" : "zetcom", });
  TempleSystem['properties'].insert({ "name" : "Languages", "value" : "EN, FR, DE", });
  TempleSystem['properties'].insert({ "name" : "RemoteUrl", "value" : "193.23.12.98", });
  TempleSystem['properties'].insert({ "name" : "RemoteDatabase", "value" : "emp", });
  TempleSystem['properties'].insert({ "name" : "RemoteUsername", "value" : "emp-admin", });
  TempleSystem['properties'].insert({ "name" : "RemotePassword", "value" : "287sdkjw398ad2", });
  TempleSystem['properties'].insert({ "name" : "elementPerPage", "value" : "10, 25, 50, 100", });
}

// views
TempleSystem['views'].remove({});
if (TempleSystem['views'].find().count() === 0) {
  TempleSystem['views'].insert({
    name: 'list'
  });
  TempleSystem['views'].insert({
    name: 'detail'
  });
  TempleSystem['views'].insert({
    name: 'search'
  });
}

// labels
TempleSystem['labels'].remove({});
if (TempleSystem['labels'].find().count() === 0) {
  TempleSystem['labels'].insert({
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
if ( TempleData['objects'].find().count() === 0 ) {
  TempleData['objects'].insert({
    title: 'Jagged Lines',
    date: 2010,
    description: 'Video (DVD)',
    type: 'Video'
  });
  TempleData['objects'].insert({
    title: 'Faux facade',
    date: 2011,
    dimension: '150x140x210 cm',
    description: 'Graue Safari-Baumwollköper in Lattengerüst',
    type: 'Tableau'
  });
  TempleData['objects'].insert({
    title: 'La Joconde',
    date: 1503,
    dimension: '77x53 cm',
    location: 'Musée du Louvre, Paris',
    description: 'Graue Safari-Baumwollköper in Lattengerüst',
    type: 'Tableau'
  });
}

// artists
if ( TempleData['artists'].find().count() === 0 ) {
  TempleData['artists'].insert({
    firstname: 'Kaspar',
    lastname: 'Bucher',
    nationality: 'CH',
    email: 'ratkinson@test.com',
    url: 'www.kasparbucher.ch'
  });
  TempleData['artists'].insert({
    firstname: 'Robert',
    lastname: 'Atkinson',
    email: 'ratkinson@test.com'
  });
  TempleData['artists'].insert({
    firstname: 'John',
    lastname: 'Doe',
    email: 'jdoe@test.com'
  });
  TempleData['artists'].insert({
    firstname: 'Melinda',
    lastname: 'Jones',
    email: 'melinda.jones@gmail.com'
  });
}

// exhibitions
if ( TempleData['exhibitions'].find().count() === 0 ) {
  TempleData['exhibitions'].insert({
    title: 'Visarte Galerie Program',
    location: 'Bern, Switzerland',
    date: 2010
  });
  TempleData['exhibitions'].insert({
    title: 'Ostrale 08',
    location: 'Dresden, Germany',
    date: 2008
  });
  TempleData['exhibitions'].insert({
    title: 'Restaurant Schwellenmätteli',
    location: 'Bern, Switzerland',
    date: 2002
  });
}
