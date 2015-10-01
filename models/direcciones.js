Direcciones = new Meteor.Collection("direcciones");
Direcciones.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});