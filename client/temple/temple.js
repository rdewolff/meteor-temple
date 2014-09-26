
// general helper available to all templates

Handlebars.registerHelper("data", function(){

  Meteor.subscribe(Session.get('module'));

  return TempleData[Session.get('module')].find();

});