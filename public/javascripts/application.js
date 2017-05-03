var App = {
  templates: JST,
  $el: $("body"),
  addBoard: function(model) {
    var board = this.Boards.add(model);
    this.BoardsView.appendBoard(board);
  },
  boardView: function(board_id) {
    this.headerView();
    this.Board = this.Boards.get(+board_id);
    this.Board.getLists(this.populateLists.bind(this));
  },
  boardsView: function() {
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
  createBoardView: function() {
    this.BoardView = new BoardView({ model: this.Board });
  },
  headerView: function() {
    this.HeaderView = this.HeaderView || new HeaderView();
  },
  populateLists: function() {
    this.Board.get("Lists").getCards((this.createBoardView).bind(this));
  },
  removeBoardMenu: function() {
    this.boardMenu.remove();
  },
  toggleStarred: function(model) {
    this.BoardsView.toggleStarred(model);
  },
  toggleBoardMenu: function() {
    this.boardMenu = this.boardMenu || new BoardMenuView();
    var $el = this.boardMenu.$el;

    if ($el.is(":visible")) {
      this.removeBoardMenu();
    } else {
      this.$el.append($el);
      $el.find("#search").focus();
    }
  },
  bind: function() {
    _.extend(this, Backbone.Events);
    this.on('boardsView', this.boardsView);
    this.on('boardView', this.boardView);
    this.on('cardView', this.cardView);
    this.on('toggleStarred', this.toggleStarred);
    this.on('addBoard', this.addBoard);
    this.on('toggleBoardMenu', this.toggleBoardMenu);
    this.on('removeBoardMenu', this.removeBoardMenu);
  },
  init: function() {
    this.bind();
  }
};