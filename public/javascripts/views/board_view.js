var BoardView = Backbone.View.extend({
  el: "main",
  template: App.templates.board,
  render: function() {
    this.$el.removeClass().html(this.template(this.model.attributes));
  },
  initialize: function() {
    this.render();
  }
})