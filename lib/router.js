// Router.configure({
//   layoutTemplate: 'layout'
// });

Router.map(function () {

  this.route('temple', {
    // path: '/:collection/:view/:option?',
    path: '/:collection',
    data: function() {
      //viewCollection = new Mongo.Collection(this.params.collection);
      //console.log('count:', viewCollection.find().count());
      return eval(this.params.collection + '.find()');
      // return viewCollection.find();
    }
  });

});
