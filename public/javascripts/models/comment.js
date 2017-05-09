var Comment = Backbone.Model.extend({
  urlRoot: function() {
    return "/cards/" + this.get('card_id') + "/comments"
  }
});