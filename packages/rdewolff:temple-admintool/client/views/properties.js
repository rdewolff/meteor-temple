Template.properties.events({
  'click .add' : function(event, template) {

    // save the new property
    Mongo.Collection.get('sys_properties').insert({
      name: template.find('#name').value,
      value:  template.find('#value').value
    });

    // clean form
    template.find('#name').value = '';
    template.find('#value').value = '';

  }
});
