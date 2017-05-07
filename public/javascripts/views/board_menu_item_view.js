var BoardMenuItemView = Backbone.View.extend({
  template: App.templates.board_menu_item,
  tagName: 'li',
  events: {
    'click a div.icon-sm': 'toggleStarred'
  },
  toggleStarred: function(e) {
    e.preventDefault()
    e.stopPropagation()
    this.model.set('starred', !this.model.get("starred"));
    this.model.save();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, "change", this.render);
  }
});