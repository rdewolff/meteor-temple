
// general helper available to all templates

UI.registerHelper("test", function(){
  console.log('UI.body.test()');
  return 'UI.body.test';
});


UI.registerHelper("data", function(){

  // subscribe to the module being displayed
  Meteor.subscribe(Session.get('module'));

  // debug
  // console.dir(TempleData[Session.get('module')].findOne({_id: Session.get('id')}));

  // depending on the view, get the required data
  switch (Session.get('view')){
    case 'list':
      // list view - array of objects
      return TempleData[Session.get('module')].find({});
      break;
    case 'details':
      // details view - single object
      return TempleData[Session.get('module')].findOne({_id: Session.get('id')});
      break;
    default:
      console.log('unhandled view');
  }

});