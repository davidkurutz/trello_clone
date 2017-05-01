var App = {
  templates: JST,
  headerView: function() {
    this.HeaderView = this.HeaderView || new HeaderView();
  },
  boardView: function(board_id) {
    this.headerView();
    this.Board = this.Boards.get(+board_id);
    this.Board.getLists(this.populateLists.bind(this));
  },
  populateLists: function() {
    this.Board.get("Lists").getCards((this.createBoardView).bind(this))
  },
  createBoardView: function() {
    this.BoardView = new BoardView({ model: this.Board });
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