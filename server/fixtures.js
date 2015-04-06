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
    type: 'Video',
    status: 'highlight',
    img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR4OwF4B0CFwqDGW3-yOtC-8RMMe8AQ5QBiWtbcs6YjwX5hwjVgnMIlNdh8'
  });
  TempleData['objects'].insert({
    title: 'Faux facade',
    date: 2011,
    dimension: '150x140x210 cm',
    description: 'Graue Safari-Baumwollköper in Lattengerüst',
    type: 'Tableau',
    status: 'highlight',
    img: 'http://img.edilportale.com/products/prodotti-16458-rel3c92e912-484b-7b27-aea2-b5709faf1eaf.jpg'
  });
  TempleData['objects'].insert({
    title: 'La Joconde',
    date: 1503,
    dimension: '77x53 cm',
    location: 'Musée du Louvre, Paris',
    description: 'Graue Safari-Baumwollköper in Lattengerüst',
    type: 'Tableau',
    status: 'draft',
    img: 'http://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg/280px-Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg'
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
  // massive artist data
  for (var i = 0; i < 10; i++) {
    TempleData['artists'].insert({
      firstname: Fake.user({fields: ['surname']}).surname,
      lastname: Fake.user({fields: ['name']}).name,
      email: Fake.user({fields: ['email']}).email
    });
  }
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
