var Board = Backbone.Model.extend({
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
  }
});