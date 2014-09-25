
Router.configure({
  // default layout template
  layoutTemplate: 'layout',
});

Router.map(function () {

  // static test
  this.route('home', {
    path: '/',
    template: 'home',
    waitOn: function() { return Meteor.subscribe('artists')},
    data: {
      artists : function() {
        return TempleData['artists'].find();
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
    path: '/:collection/',
    waitOn: function() {
      return Meteor.subscribe(this.params.collection);
    },
    data: function() {
      // for a new collection this would be possible :
      //viewCollection = new Mongo.Collection(this.params.collection);
      //return viewCollection.find();
      return TempleData[this.params.collection].find();
      // dynamic old way : return eval(this.params.collection + '.find()');
    }
  });

  this.route('detail', {
    path: '/:collection/:id',
    waitOn: function() {
      return Meteor.subscribe(this.params.collection)
    },
    data: function() {
      return TempleData[this.params.collection].find();
      // return eval(this.params.collection + '.find(_id: '+this.params.id+')');
    }
  });

});
