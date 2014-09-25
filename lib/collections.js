TempleSystem = {}; // Temple system collections, prefixed with "sys_"
TempleData = {};

TempleSystem['properties'] = new Mongo.Collection("sys_properties");
TempleSystem['modules'] = new Mongo.Collection("sys_modules");
TempleSystem['views'] = new Mongo.Collection("sys_views");
TempleSystem['labels'] = new Mongo.Collection("sys_labels");
if (Meteor.isServer) {
  for (obj in TempleSystem)
    Houston.add_collection(TempleSystem[obj]);
}

// FIXME: move this to the fixtures. Due to loading order, we have to put that here
// modules
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
   console.log('Added TempleSystem modules data');
  }
}

// Temple data collections
TempleSystem['modules'].find({}).forEach(function(obj){
  TempleData[obj.name] = new Mongo.Collection(obj.name);
  if (Meteor.isServer)
    Houston.add_collection(TempleData[obj.name]);
  console.log('Mongo reference to collection ' + obj.name + ' created.');
});
