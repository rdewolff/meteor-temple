

// Autopublish must be off
Meteor.publish('artists', function(author) {

  return TempleData['artists'].find({});

});
