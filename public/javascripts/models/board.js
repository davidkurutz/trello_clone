var Board = Backbone.Model.extend({
  urlRoot: "/boards",
  getLists: function(cb) {
    var id = this.get("id");
    $.ajax({
      url: "/lists/" + id,
      context: this,
      success: function(json) {
        this.set("Lists", new Lists(json));
        cb();
      }
    });
  },
  initialize: function() {
    this.on('change:starred', App.triggerStarred.bind(App))
  }
});