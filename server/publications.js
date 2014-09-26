
// Register the modules first - required!
Meteor.publish('modules', function () {
	return TempleSystem['modules'].find({});
});

// dynamic publish all registered modules (modules in database)
TempleSystem['modules'].find({}).forEach( function(module) {
	// debug console.log('module', module.name);
	Meteor.publish(module.name, function(author) {
	  return TempleData[module.name].find({});
	});
});
