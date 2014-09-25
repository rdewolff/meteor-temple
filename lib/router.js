
Router.configure({
  // layoutTemplate: 'index'
});

Router.map(function () {

  // static test
  this.route('index', {
    path: '/',
    // layouteTemplate: 't1',
    template: 't1',
    waitOn: function() { return Meteor.subscribe('artists')},
    data: {
      artists : function() {
        //viewCollection = new Mongo.Collection(this.params.collection);
        //console.log('count:', viewCollection.find().count());
        return Artists.find();
        // return viewCollection.find();
      }
    }
  });

  // dynamic list
  this.route('list', {
    /* FIXME: show nice errors when module not defined in SysModules.
    onBeforeAction: function() {
      throwError = function(message) {
        Errors.insert({message: 'Missing module declaration'})
      }
    },*/
    // path: '/:collection/:view/:option?',
    path: '/:collection/', // dynamic full path: '/:collection/:view/:option?',
    waitOn: function() {
      return Meteor.subscribe(this.params.collection)
    },
    data: function() {
      // for a new collection this would be possible :
      //viewCollection = new Mongo.Collection(this.params.collection);
      //return viewCollection.find();
      return eval(this.params.collection + '.find()');
    }
  });

});
