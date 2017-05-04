var App = {
  templates: JST,
  $el: $("body"),
  addBoard: function(model) {
    var board = this.Boards.add(model);
    this.BoardsView.appendBoard(board);
  },
  addList: function(model) {
    var Lists = this.Board.get("Lists");
    var list = Lists.add(model)
    list.getCards((function() { 
      this.BoardView.trigger('newList', list)
    }).bind(this))
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
    if (this.boardMenu) {
      this.boardMenu.remove();
      delete this.boardMenu;
    }
  },
  removeListActionsMenu() {
    this.trigger('remove_list_actions_menu')
  },
  removeNewListButton: function() {
    this.BoardView.trigger('removeNewListButton')
  },
  removeNewCardForm: function() {
    this.trigger('removeNewCardForm')
  },
  toggleStarred: function(model) {
    this.BoardsView.toggleStarred(model);
  },
  toggleBoardMenu: function() {
    if (this.boardMenu) {
      this.removeBoardMenu();
    } else {
      this.boardMenu = new BoardMenuView();
      this.$el.append(this.boardMenu.$el).find("#search").focus();
    }
  },
  bind: function() {
    _.extend(this, Backbone.Events);
    this.on('addList', this.addList);
    this.on('boardsView', this.boardsView);
    this.on('boardView', this.boardView);
    this.on('cardView', this.cardView);
    this.on('toggleStarred', this.toggleStarred);
    this.on('addBoard', this.addBoard);
    this.on('toggleBoardMenu', this.toggleBoardMenu);
    this.on('removeBoardMenu', this.removeBoardMenu);
    this.$el.on('click', this.removeBoardMenu.bind(this));
    this.$el.on('click', this.removeNewListButton.bind(this))
    this.$el.on('click', this.removeListActionsMenu.bind(this))
    this.$el.on('click', this.removeNewCardForm.bind(this))
  },
  init: function() {
    this.bind();
  }
};