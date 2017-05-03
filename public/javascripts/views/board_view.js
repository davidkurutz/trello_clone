var BoardView = Backbone.View.extend({
  el: "main",
  template: App.templates.board,
  render: function() {
    var board = this.model.toJSON();
    var lists = board.Lists;
    this.$el.removeClass().html(this.template({ board: board }));

    lists.forEach(function(list) {
      this.$("#listlist li.add_list").before(new ListView({ model: list}).$el);
    })
  },
  events: {
    'click .card' : 'cardView'
  },
  cardView: function(e) {
    e.preventDefault();
    var $t = $(e.currentTarget);
    var id = +$t.attr("data-card-id");
    var listId = +$t.closest(".board_list").attr("data-list-id");
    App.trigger('cardView', id, listId);
  },
  initialize: function() {
    this.render();
  }
});