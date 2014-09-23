
if ( Artists.find().count() === 0 ) {

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

  console.log('Fixtures loaded');

}
