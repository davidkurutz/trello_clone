var BoardMenuView = Backbone.View.extend({
  template: App.templates.board_menu,
  id: "boardMenu",
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
  }
});