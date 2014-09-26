
Router.configure({
  // default layout template
  layoutTemplate: 'layout',
});

Router.map(function () {

  /**
   * Home page
   */
  this.route('home', {
    path: '/',
    template: 'home',
    /*waitOn: function() {return Meteor.subscribe('artists') },*/ 
    /*data: {artists : function() {return TempleData['artists'].find(); } }*/
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
    notFoundTemplate: 'default_list', // FIXME: buggy, not working?
    template: function() {
      return Router.current().params.collection + '_list'
    },
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

  // this.route('detail', {
  //   path: '/:collection/:id',
  //   waitOn: function() {
  //     return Meteor.subscribe(this.params.collection)
  //   },
  //   data: function() {
  //     return TempleData[this.params.collection].find();
  //     // return eval(this.params.collection + '.find(_id: '+this.params.id+')');
  //   }
  // });

});
