// counter starts at 0

// Meteor.subscribe('artists');

/*
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
*/

// FIXME: why can't we target the click on the object ID with #  ??
Template.header.events({
  'click .templeLogin': function() {
    console.log('login dude!');
    // console.dir(Accounts);
    // Accounts.loginWithPassword;
  }
})

// generic object count function using the session where the number is stored.
UI.registerHelper('count', function() {
  return Session.get('objectCount');
});
