var List = Backbone.Model.extend({
  url: function() {
    return "/lists/" + this.get("id");
  },
  getCards: function(cb) {
    var id = this.get("id");
    $.ajax({
      url: "/cards/" + id,
      context: this,
      success: function(json) {
        this.set("Cards", new Cards(json));
        cb();
      }
    });
  }
});