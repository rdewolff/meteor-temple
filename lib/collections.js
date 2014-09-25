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

// FIXME: help! :)

// Declaring the 'artists' like this works :
//TempleData['artists'] = new Mongo.Collection('artists');

// Declaring 'artists' from within a loop does NOT ???
var TempleModules = TempleSystem['modules'].find({}).fetch();

for (var i = 0; i < TempleModules.length; i++) {
  TempleData[TempleModules[i].name] = new Mongo.Collection(TempleModules[i].name);
  if (Meteor.isServer)
    Houston.add_collection(TempleData[TempleModules[i].name]);
  console.log('Mongo reference to collection ' + TempleModules[i].name + ' created.');
}


console.log(TempleData['artists'].find({}).count());

// // Temple data collections
// var self = this;
// TempleData['rom'] = 'ain';
//
// TempleSystem['modules'].find({}).forEach(function(obj){
//   self.TempleData.rom = 'blah'
//   console.log(self.TempleData.rom);
//   console.log(TempleData.rom);
//   TempleData[obj.name] = new Mongo.Collection(obj.name);
//   if (Meteor.isServer)
//     Houston.add_collection(TempleData[obj.name]);
//   console.log('Mongo reference to collection ' + obj.name + ' created.');
// });
//
