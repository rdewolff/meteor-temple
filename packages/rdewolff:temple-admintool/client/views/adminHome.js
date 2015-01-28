// adminHome.js

Template.adminHome.helpers({
  user : function() {
    // debug: console.log(Meteor.user().emails[0].address);
    return Meteor.user().emails[0].address;
  }
});
