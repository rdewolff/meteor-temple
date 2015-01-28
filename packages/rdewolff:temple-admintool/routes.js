
// FIXME: move collections to separate file
// FIXME: create separate shared package (TempleInit ?) to create all the required collection on application load
SysProperties = new Mongo.Collection('sys_properties');

try {
  SysModules = Mongo.Collection.get('sys_modules');
} catch(err) {
  SysModules = new Mongo.Collection("sys_modules");
}

// Register the modules first - required!
if (Meteor.isServer) {
  Meteor.publish('sys_properties', function () {
    return SysProperties.find({});
  });
}

Router.map(function () {

  /**
  * Admin Tool Routes
  */
  this.route('atHome', {
    path: '/at',
    template: 'adminHome'
    /*waitOn: function() {return Meteor.subscribe('artists') },*/
    /*data: {artists : function() {return TempleData['artists'].find(); } }*/
  });

  this.route('atProperties', {
    path: '/at/properties',
    template: 'properties',
    waitOn:
      function() { return Meteor.subscribe('sys_properties'); },
    data: {
      properties : function() { return Mongo.Collection.get('sys_properties').find(); }
    }
  });

});
