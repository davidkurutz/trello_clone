var BoardsView = Backbone.View.extend({
  el: "main",
  template: App.templates.boards,
  events: {
    "click .create_new_board": "createBoard"
  },
  appendBoard: function(board) {
    this.$(".personal ul li:last-child").before(new BoardOverviewView({model: board}).$el);
  },
  render: function() {
    var boards = this.collection;
    var starredBoards = this.collection.where({ starred: true});

    this.$el.removeClass().addClass('boards_view').html(this.template({}));

    if (!starredBoards[0]) {
      this.$(".starred").hide();
    }

    starredBoards.forEach(function(board) {
      this.$(".starred ul").append(new BoardOverviewView({model: board}).$el);
    });

    boards.each(function(board) {
      this.$(".personal ul li:last-child").before(new BoardOverviewView({model: board}).$el);
    });
  },
  toggleStarred: function(model) {
    var id = model.get("id");
    var starred = model.get("starred");
    var section = this.$("section.starred");
    var list = section.find("ul");
    var length;

    if (starred) {
      list.append(new BoardOverviewView({model: model}).$el);
    } else {
      list.find("[data-board-id=" + id + "]").closest("li").remove();
    }

    length = list.find("li").length;

    if (length === 0) {
      section.hide();
    } else {
      section.show();
    }
  },
  createBoard: function(e) {
    e.preventDefault();
    var li = $(e.target).closest("li");
    li.prepend(new CreateBoardFormView().$el);
    $(".create_board input#title").focus();
  }
});