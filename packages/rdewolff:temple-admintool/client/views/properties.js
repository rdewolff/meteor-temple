Template.properties.events({

  // add the new element
  'click .add' : function(event, template) {
    // save the new property
    Mongo.Collection.get('sys_properties').insert({
      name: template.find('#name').value,
      value:  template.find('#value').value
    });
    // clean form
    template.find('#name').value = '';
    template.find('#value').value = '';
  },

  // delete the selected element
  'click .delete' : function(event, template) {
    // FIXME: use fixed id on the row for proper selection. Currently we depend on the view structure (prototype)
    // use maybe some solution like described here : https://github.com/aldeed/meteor-autoform/issues/298#issuecomment-55061540
    ObjIdToDel = $(event.target).parent().parent().find('[name=id]').val();
    // debug: console.log(ObjIdToDel);
    Mongo.Collection.get('sys_properties').remove(ObjIdToDel);
  },

  // update the element after any keypress
  'keyup .edit' : function(event, template) {
    // FIXME: use fixed id on the row for proper selection. Currently we depend on the view structure (prototype)
    // use maybe some solution like described here : https://github.com/aldeed/meteor-autoform/issues/298#issuecomment-55061540
    ObjIdToUpdate = $(event.target).parent().parent().find('[name=id]').val();
    // debug: console.log(ObjIdToUpdate);

    Mongo.Collection.get('sys_properties').update(ObjIdToUpdate, {
      name: $(event.target).parent().parent().find('[name=name]').val(),
      value: $(event.target).parent().parent().find('[name=value]').val()
    });
  },

  'click .duplicate' : function(event, template) {
    Mongo.Collection.get('sys_properties').insert({
      name: $(event.target).parent().parent().find('[name=name]').val(),
      value: $(event.target).parent().parent().find('[name=value]').val()
    });
  }

});
