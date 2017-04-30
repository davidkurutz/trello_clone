var App = {
  templates: JST,
  headerView: function() {
    this.HeaderView = this.HeaderView || new HeaderView();
  },
  boardView: function(board_id) {
    this.headerView();
    var board = this.Boards.get(board_id);
    board.getLists();
    this.BoardView = new BoardView({ model: board });
    // router.navigate("/b/" + board_id);
  },
  boardsView: function() {
    this.headerView();
    this.BoardsView = new BoardsView({
      collection: this.Boards
    });
  },
  bind: function() {
    _.extend(this, Backbone.Events);
    this.on('boardView', this.boardView);
  },
  init: function() {
    this.bind();
  }
};