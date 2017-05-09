var BoardMenuItemView = Backbone.View.extend({
  template: App.templates.board_menu_item,
  tagName: 'li',
  id: function() {
    return "board_" + this.model.get("id");
  },
  events: {
    'click a div.icon-sm': 'toggleStarred'
  },
  toggleStarred: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.model.set('starred', !this.model.get("starred"));
    this.model.save();
    App.trigger('toggleStarred', this.model);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, "change", this.render);
  }
});