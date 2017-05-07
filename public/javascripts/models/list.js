var List = Backbone.Model.extend({
  urlRoot: "/lists",
  getCards: function(cb) {
    var id = this.get("id");
    $.ajax({
      url: "/lists/" + id,
      context: this,
      success: function(json) {
        this.set("Cards", new Cards(json));
        cb();
      }
    });
  }
});