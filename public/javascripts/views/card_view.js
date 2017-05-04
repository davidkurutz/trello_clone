var CardView = Backbone.View.extend({
  template: App.templates.card,
  className: "cover_modal",
  events: {
    "click div.close": "close"
  },
  close: function(e) {
    this.remove();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    $("body").append(this.$el);
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'destroy', this.remove)
  }
});