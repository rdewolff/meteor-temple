Template.home.helpers({
  artists: function () {
    return Mongo.Collection.get('artists').find({});
  },
  tasks: [
      { text: "This is task 1" },
      { text: "This is task 2" },
      { text: "This is task 3" }
    ]
})
