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
    this.Board.get("Lists").getCards((this.createBoardView).bind(this));
  },
  createBoardView: function() {
    this.BoardView = new BoardView({ model: this.Board });
  },
  toggleStarred: function(model) {
    this.BoardsView.toggleStarred(model);
  },
  boardsView: function(t) {
    this.headerView();

    if (this.BoardView) {
      this.BoardView.undelegateEvents();
      this.BoardView.$el.empty();
    }

    this.BoardsView = this.BoardsView || new BoardsView({
      collection: this.Boards
    });

    this.BoardsView.render();
  },
  cardView: function(cardId, listId) {
    var card = this.Board.get("Lists").get(listId).get("Cards").get(cardId);
    new CardView({ model: card });
  },
  addBoard: function(model) {
    var board = this.Boards.add(model);
    this.BoardsView.appendBoard(board);
  },
  bind: function() {
    _.extend(this, Backbone.Events);
    this.on('boardsView', this.boardsView);
    this.on('boardView', this.boardView);
    this.on('cardView', this.cardView);
    this.on('toggleStarred', this.toggleStarred);
    this.on('addBoard', this.addBoard);
  },
  init: function() {
    this.bind();
  }
};