var App = {
  templates: JST,
  $el: $("body"),
  addBoard: function(model) {
    var board = this.Boards.add(model);
    this.BoardsView.appendBoard(board);
  },
  addList: function(model) {
    var Lists = this.Board.get("Lists");
    var list = Lists.add(model);
    list.getCards((function() { 
      this.BoardView.trigger('newList', list);
    }).bind(this));
  },
  getListsAndPopulate: function() {
    this.Board.getLists(this.populateLists.bind(this));
  },
  boardView: function(board_id) {
    this.headerView();
    this.Board = this.Boards.get(+board_id);
    this.getListsAndPopulate();
    this.bind();
    router.navigate("/b/" + this.Board.get("id") + "/" + uri(this.Board.get("title")));
  },
  boardsView: function() {
    this.headerView();

    if (this.BoardView) {
      this.BoardView.undelegateEvents();
      this.BoardView.$el.empty();
      delete this.BoardView;
    }

    this.BoardsView = this.BoardsView || new BoardsView({
      collection: this.Boards
    });

    this.BoardsView.render();
    this.bind();
  },
  createBoardView: function() {
    if (this.BoardView) {
      this.BoardView.undelegateEvents();
      this.BoardView.$el.empty();
      delete this.BoardView;
    }
    this.BoardView = this.BoardView || new BoardView({ model: this.Board });
    if (App.cardId) {
      App.BoardView.$el.find("#card-" + App.cardId + " a").trigger('click')
    }
  },
  headerView: function() {
    this.HeaderView = this.HeaderView || new HeaderView();
  },
  populateLists: function() {
    this.Board.get("Lists").getCards((this.createBoardView).bind(this));
  },
  closePopup: function() {
    this.trigger('closePopup');
  },
  toggleStarred: function(model) {
    if (this.BoardsView) {
      this.BoardsView.toggleStarred(model);
    }
  },
  triggerStarred: function() {
    this.trigger('renderStarredMenu');
  },
  toggleBoardMenu: function() {
    this.boardMenu = this.boardMenu || new BoardMenuView();
    this.$el.append(this.boardMenu.$el);
    this.boardMenu.$el.toggle();
  },
  cardView: function() {
    var listId = App.Card.get('list_id');
    var listName = App.Board.get('Lists').get(listId).get("name");
    new CardView({model: App.Card, listName: listName});
    router.navigate("/c/" + this.Card.get("id") + "/" + uri(this.Card.get("name")));
  },
  cardOverlay: function(cardid) {
    var id = this.Board.get("id");
    this.boardView(id,);
  },  
  bind: function() {
    _.extend(this, Backbone.Events);
    this.off();
    this.$el.off();
    this.on('addList', this.addList);
    this.on('boardsView', this.boardsView);
    this.on('boardView', this.boardView);
    this.on('cardView', this.cardView);
    this.on('toggleStarred', this.toggleStarred);
    this.on('addBoard', this.addBoard);
    this.on('toggleBoardMenu', this.toggleBoardMenu);
    this.$el.on('click', this.closePopup.bind(this));
  }
};

Handlebars.registerHelper('uri', function(text) {
  return encodeURI(text.replace(/\s/g,'-'));
});

Handlebars.registerHelper('smDate', function(date) {
  return moment(date).format('MMM D');
});

Handlebars.registerHelper('lnDate', function(date) {
  return moment(date).format('MMM D ') + 'at ' + moment(date).format('h:mm A');
});
Handlebars.registerHelper('smDate', function(date) {
  return moment(date).format('MMM D'+ '');
});

Handlebars.registerHelper('length', function(array) {
  return array.length;
});

Handlebars.registerHelper('lgto', function(array) {
  return array.length > 0;
});



function uri(text) {
  return encodeURI(text.replace(/\s/g,'-'));
}