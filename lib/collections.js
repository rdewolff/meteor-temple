// created on client & server

// System collections
SysProperties = new Mongo.Collection("sys_properties");
SysModules = new Mongo.Collection("sys_modules");
SysViews = new Mongo.Collection("sys_views");
SysLabels = new Mongo.Collection("sys_labels");

// Data collections
// TODO: loop through SysModules values and instanciate them in array
Objects = new Mongo.Collection("objects");
Artists = new Mongo.Collection("artists");
Exhibition = new Mongo.Collection("exhibitions");
