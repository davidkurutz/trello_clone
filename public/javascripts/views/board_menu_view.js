var BoardMenuView = Backbone.View.extend({
  template: App.templates.board_menu,
  id: "boardMenu",
  events: {
    'click': 'stop'
  },
  stop: function(e) {
    e.stopPropagation();
  },
  render: function() {
    this.$el.html(this.template());
    this.delegateEvents();
  },
  initialize: function() {
    this.render();
  }
});