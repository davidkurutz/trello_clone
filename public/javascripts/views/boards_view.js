var BoardsView = Backbone.View.extend({
  el: "main",
  template: App.templates.boards,
  events: {
    "click .board_obj .icon-star": "toggleStar"
  },
  toggleStar: function(e) {
    e.preventDefault();
    e.stopPropagation();

    var id = +$(e.target).closest(".board_obj").attr("data-board-id");
    var board = this.collection.get(id);
    var starred = !board.get("starred");

    $.ajax({
      url: "/b/" + id,
      type: "PUT",
      context: this,
      data: { "starred": starred },
      success: function(json) {
        board.set(json);
        this.render();
      }
    });
  },
  render: function() {
    var boards = this.collection.toJSON();
    var starred_boards = this.collection.where({ starred: true}).map(function(b){
      return b.toJSON();
    });

    this.$el.removeClass().addClass('boards_view').html(this.template({
      boards: boards,
      starred_boards: starred_boards
    }));

  },
  initialize: function() {
    this.render();
  }
});