// counter starts at 0

console.log('client');

// Meteor.subscribe('artists');

Session.setDefault("counter", 0);

Template.hello.helpers({
  counter: function () {
    return Session.get("counter");
  }
});

Template.hello.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set("counter", Session.get("counter") + 1);
  }
});

/*
Template.home.helpers({
  artists: function() {
    return Artists.find();
  }
});
*/
