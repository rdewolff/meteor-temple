

// Autopublish must be off
Meteor.publish('artists', function(author) {

  return TempleData['artists'].find({});

});

Meteor.publish('modules', function () {

  return TempleSystem['modules'].find();

});
