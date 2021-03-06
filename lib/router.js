Router.onBeforeAction('dataNotFound');

Router.configure({
  // default layout template
  layoutTemplate: 'layout'
});

Router.map(function () {

  /**
   * Home page
   */
  this.route('home', {
    path: '/',
    template: 'home',
    waitOn:
      function() { return Meteor.subscribe('objects'); },
    data: {
      objects : function() {
        return Mongo.Collection.get('objects').find({'status': 'highlight'});
      }
    }
  });

  /**
   * List (multiple objects)
   */
  this.route('list', {
    /* FIXME: show nice errors when module not defined in SysModules.
    onBeforeAction: function() {
      throwError = function(message) {
        Errors.insert({message: 'Missing module declaration'})
      }
    },*/
    path: '/:collection/',
    // FIXME: data: false, will trigger the notFoundTemplate (weird bug?)
    notFoundTemplate: 'default_list', // FIXME: buggy, not working?
    waitOn: function() {
      return Meteor.subscribe(Router.current().params.collection)
    },
    template: function() {
      Session.set('module', Router.current().params.collection);
      Session.set('view', 'list');
      return Router.current().params.collection + '_list'
    }
    // FIXME: this is not working
    // 1) not working
    // waitOn: function() {
    //   //console.log('waitOn', this.params.collection);
    //   return Meteor.subscribe(Router.current().params.collection);
    // },
    // 2) not working (almost!)
    // waitOn: function() {
    //   return Meteor.subscribe(Router.current().params.collection)
    // },
    // data: {
    //   collection : function() {
    //     //console.log(TempleData);
    //     return TempleData[(Router.current().params.collection)].find()
    //   }
    // }
    // 3) not working
    // data: function() {
    //   // for a new collection this would be possible :
    //   //viewCollection = new Mongo.Collection(this.params.collection);
    //   //return viewCollection.find();
    //   return TempleData[Router.current().params.collection].find();
    //   // dynamic old way : return eval(this.params.collection + '.find()');
    // }

  });

  /**
   * Search
   */
  this.route('search', {
    path: '/:collection/search',
    notFoundTemplate: 'default_search',
    template: function () {
      Session.set('module', Router.current().params.collection);
      Session.set('view', 'search');
      return Router.current().params.collection + '_search';
    }
  });

  /**
   * Details (single object)
   */
  this.route('details', {
    path: '/:collection/:id',
    // FIXME: data: false, will trigger the notFoundTemplate (weird bug?)
    notFoundTemplate: 'default_details',
    template: function () {
      Session.set('module', Router.current().params.collection);
      Session.set('view', 'details');
      Session.set('id', Router.current().params.id);
      return Router.current().params.collection + '_details';
    }
     /*waitOn: function() {
       return Meteor.subscribe(this.params.collection)
     },
     data: function() {
       return TempleData[this.params.collection].find();
       // return eval(this.params.collection + '.find(_id: '+this.params.id+')');
     }*/
  });

});
