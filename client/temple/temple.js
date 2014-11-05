/**
 * Gather all the data for the
 */
UI.registerHelper("data", function(){

  // check if the module subscribtions are finished
  if (!moduleSub.ready())
    return;

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

/**
 * Links and active
 */

// Determine if current link should be active.
Template.registerHelper('active', function(path) {
  // messy way : curPath=function(){var c=window.location.pathname;var b=c.slice(0,-1);var a=c.slice(-1);if(b==""){return"/"}else{if(a=="/"){return b}else{return c}}};

  // console.log('active() trigger', Meteor.isServer); // , arguments.callee.caller.toString());
  return Router.current().path == path ? {class: 'active'} : '';
});


/**
 * Search filter
 */

Template.filters.events({
  'click .filter' : function (event) {
    var filter;
    console.log('click .filter', $(event.target).text());

    var instance = EasySearch.getComponentInstance(
      { index: 'objects' }
    );
    if ($(event.target).text() == 'All') {
      filter = [];
    } else {
      filter = [$(event.target).text()]; // TODO: add multiple filter capacity
    }
    // change the filter
    EasySearch.changeProperty('objects', 'filteredType', filter);

    instance.triggerSearch();
  }
});
