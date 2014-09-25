Collections = {};
System = {}; // System collections, prefixed with "sys_"

System['properties'] = new Mongo.Collection("sys_properties");
System['modules'] = new Mongo.Collection("sys_modules");
System['views'] = new Mongo.Collection("sys_views");
System['labels'] = new Mongo.Collection("sys_labels");
for (obj in System) {
  Houston.add_collection(System[obj]);
}

// FIXME: move this to the fixtures. Due to loading order, we have to put that here
// modules
System['modules'].remove({});
if (System['modules'].find().count() === 0) {
 System['modules'].insert({
   name: 'objects'
 });
 System['modules'].insert({
   name: 'artists'
 });
 System['modules'].insert({
   name: 'exhibitions'
 });
 console.log('Added system modules data');
}

// Data collections
System['modules'].find({}).forEach(function(obj){
  Collections[obj.name] = new Mongo.Collection(obj.name);
  if (Meteor.isServer)
    Houston.add_collection(Collections[obj.name]);
  console.log('Mongo reference to collection ' + obj.name + ' created.');
});
