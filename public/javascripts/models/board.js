var Board = Backbone.Model.extend({
  getLists: function(json) {
    this.set("Lists", new Lists(json));
  }
})