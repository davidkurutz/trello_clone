var BoardMenuItemView = Backbone.View.extend({
  template: App.templates.board_menu_item,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
  }
});