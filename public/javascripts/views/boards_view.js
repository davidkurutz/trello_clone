var BoardsView = Backbone.View.extend({
  el: "main",
  template: App.templates.boards,
  events: {

  },
  render: function() {
    this.$el.removeClass().addClass('boards_view').html(this.template({
      boards: this.collection.toJSON()
    }));
  },
  initialize: function() {
    this.render();
  }
})