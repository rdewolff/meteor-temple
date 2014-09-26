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

// general helper available to all templates
// Handlebars.registerHelper("createdAtFormatted", function(){
//      return this.createdAt ? moment(this.createdAt).fromNow() : '–';
// });