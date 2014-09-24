// Router.configure({
//   layoutTemplate: 'layout'
// });

Router.map(function () {

  // dynamic test
  this.route('temple', {
    // path: '/:collection/:view/:option?',
    path: '/:collection',
    waitOn: function() { return Meteor.subscribe(this.params.collection)},
    data: function() {
      //viewCollection = new Mongo.Collection(this.params.collection);
      //console.log('count:', viewCollection.find().count());
      return eval(this.params.collection + '.find()');
      // return viewCollection.find();
    }
  });

  // static test
  this.route('home', {
    // path: '/:collection/:view/:option?',
    path: '/',
    waitOn: function() { return Meteor.subscribe('artists')},
    data: {
      artists : function() {
        //viewCollection = new Mongo.Collection(this.params.collection);
        //console.log('count:', viewCollection.find().count());
        return Artists.find();
        // return viewCollection.find();
      }
    }

  });

  // example
  /* //
  this.route('postsShow', {
    path: '/posts/:_id',
    waitOn: function() { return Meteor.subscribe('post', this.params._id)},
    data: function() { return Posts.findOne(this.params._id); }
  });
  */

});
