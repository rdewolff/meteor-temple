
// Register the modules first - required!
Meteor.publish('modules', function () {
	return TempleSystem['modules'].find({});
});

// dynamic publish registered modules
TempleSystem['modules'].find({}).forEach( function(module) {
	console.log('module', module.name);
	Meteor.publish(module.name, function(author) {
	  return TempleData[module.name].find({});
	});
});
