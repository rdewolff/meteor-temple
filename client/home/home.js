Template.home.helpers({
  artists: function () {
    return Mongo.Collection.get('artists').find({});
  }
})

Template.home.onRendered(function() {

  console.log('template home rendered');

  setTimeout(function(){
      masonize();

  }, 125);

});


/**
 * Masonry
 */
function masonize() {

  var container = $('#container');
  container.masonry({
    itemSelector: '.item',
    columnWidth: 190,
  });

}
