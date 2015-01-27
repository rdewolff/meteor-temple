
// FIXME: move collections to separate file
// FIXME: create separate shared package (TempleInit ?) to create all the required collection on application load
SysProperties = new Mongo.Collection('sys_properties');

try {
  SysModules = Mongo.Collection.get('sys_modules');
} catch(err) {
  SysModules = new Mongo.Collection("sys_modules");
}

Router.map(function () {

  /**
  * Admin Tool Routes
  */
  this.route('atHome', {
    path: '/at',
    template: 'atHome'
    /*waitOn: function() {return Meteor.subscribe('artists') },*/
    /*data: {artists : function() {return TempleData['artists'].find(); } }*/
  });

  this.route('atProperties', {
    path: '/at/properties',
    template: 'properties',
    data: { sysProperties: function() { return SysProperties.find() } }
  })

});
