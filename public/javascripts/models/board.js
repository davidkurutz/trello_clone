var Board = Backbone.Model.extend({
  urlRoot: "/boards",
  getLists: function(cb) {
    var id = this.get("id");
    $.ajax({
      url: "/boards/" + id,
      context: this,
      success: function(json) {
        this.set("Lists", new Lists(json));
        cb();
      }
    });
  },
  removeSortOrder: function() {
    if (!this.get('starred')) {
      this.unset('sort_order');
      this.save();
    }
  },
  initialize: function() {
    this.on('change:starred', App.triggerStarred.bind(App))
  }
});