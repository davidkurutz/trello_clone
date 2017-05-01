var BoardView = Backbone.View.extend({
  el: "main",
  template: App.templates.board,
  render: function() {
    var board = this.model.toJSON();
    var lists = board.Lists.toJSON();
    this.$el.removeClass().html(this.template({
      board: board,
      lists: lists
    }));
  },
  initialize: function() {
    this.render();
  }
})