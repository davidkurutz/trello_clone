var Card = Backbone.Model.extend({
  urlRoot: "/cards",
  defaults: {
    Comments: []
  }
});