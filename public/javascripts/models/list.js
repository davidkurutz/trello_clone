var List = Backbone.Model.extend({
  getCards: function(cb) {
    var id = this.get("id");
    console.log(id)
    $.ajax({
      url: "/cards/" + id,
      context: this,
      success: function(json) {
        this.set("Cards", new Cards(json));
        console.log('success')
        cb();
      }
    });
  }
});