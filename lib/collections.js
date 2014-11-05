console.log('collection.js');

// global variables
TempleSystem = {}; // Temple system collections, prefixed with "sys_"
TempleData = {};

// link to the system tables
TempleSystem['properties'] = new Mongo.Collection("sys_properties");
TempleSystem['modules'] = new Mongo.Collection("sys_modules");
TempleSystem['views'] = new Mongo.Collection("sys_views");
TempleSystem['labels'] = new Mongo.Collection("sys_labels");
if (Meteor.isServer) {
  for (obj in TempleSystem)
    Houston.add_collection(TempleSystem[obj]);
}

// Fixtures : modules
// FIXME: move this to the fixtures. Due to loading order, we keep it here for now
if (Meteor.isServer) {
  if (TempleSystem['modules'].find().count() === 0) {
   TempleSystem['modules'].insert({
     name: 'objects'
   });
   TempleSystem['modules'].insert({
     name: 'artists'
   });
   TempleSystem['modules'].insert({
     name: 'exhibitions'
   });
  }
}

if (Meteor.isServer) {

  var TempleModules = TempleSystem['modules'].find({}).fetch();

  for (var i = 0; i < TempleModules.length; i++) {
    TempleData[TempleModules[i].name] = new Mongo.Collection(TempleModules[i].name);
    Houston.add_collection(TempleData[TempleModules[i].name]);
    // debug console.log('Mongo reference to collection ' + TempleModules[i].name + ' created.');
  }

  /**
   * Search server side
   */
  EasySearch.createSearchIndex('objects', {
    'field' : ['title', 'description', 'type'],  // required, searchable field(s)
    'collection' : TempleData['objects'],          // required, the Collection containing the data
    //'limit' : 20,                  // not required, default is 10
    'filteredType' : [],
    'query' : function (searchString) {
      // default query that will be used for searching
      var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);
      // filters if set
      if (this.filteredType.length > 0) {
        console.log('filteredType');
        query.type = { $in : this.filteredType };
      }
      return query;
    }
  });

} else {

  // on the client, subscribe to data
  // store the sub to check in the helper if it's finished
  moduleSub = Meteor.subscribe('modules', function () {
    var TempleModules = TempleSystem['modules'].find({}).fetch();
    for (var i = 0; i < TempleModules.length; i++) {
      TempleData[TempleModules[i].name] = new Mongo.Collection(TempleModules[i].name);
      // debug console.log('Mongo reference to collection ' + TempleModules[i].name + ' created.');
    }

    /**
     * Search
     */
    Meteor.subscribe('objects', function () {
      // name is the field to search over
      EasySearch.createSearchIndex('objects', {
        'field' : ['title', 'description', 'type'],  // required, searchable field(s)
        'collection' : TempleData['objects'],          // required, the Collection containing the data
        //'limit' : 20,                  // not required, default is 10
        'filteredType' : [],
        'query' : function (searchString) {
          // default query that will be used for searching
          var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);
          // filters if set
          if (this.filteredType.length > 0) {
            console.log('filteredType');
            query.type = { $in : this.filteredType };
          }
          return query;
        }
      });
    });


  });
}