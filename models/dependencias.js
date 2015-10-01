Dependencias = new Meteor.Collection("dependencias");
Dependencias.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});