var CardView = Backbone.View.extend({
  template: App.templates.card,
  className: "cover_modal",
  events: {
    "click": "close",
    "click div.close": "close",
    "click .card_detail": "stop"
  },
  stop: function(e) {
    e.stopPropagation();
  },
  close: function(e) {
    this.remove();
    router.navigate("/b/" + App.Board.get("id"));
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    $("body").append(this.$el);
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'destroy', this.remove);
  }
});