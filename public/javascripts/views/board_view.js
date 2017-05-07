var BoardView = Backbone.View.extend({
  el: "main",
  template: App.templates.board,
  renameTemplate: App.templates.rename_board,
  render: function() {
    var board = this.model.toJSON();
    var lists = board.Lists;

    this.$el.removeClass().html(this.template({ board: board }));
    lists.forEach(this.renderList.bind(this));
    
    $("#listlist").sortable({
      helper: "clone",
      items: ".board_list",
      opacity: 0.75,
      scroll: false,
      update: function(event, ui) {
        var data = $("#starred_boards").sortable('serialize');
      }
    });

    $(".cards").sortable({
      connectWith: ".cards",
      helper: "clone",
      opacity: 0.75,
      scroll: false,
      update: function(event, ui) {
        var data = $("#starred_boards").sortable('serialize');
      }
    });
  },
  renderList: function(list) {
    this.$("#listlist li.add_list").before(new ListView({ model: list}).$el);
  },
  events: {
    'click .add_list': 'addList',
    'click .board_name': 'toggleBoardRename',
    'click div.star' : 'toggleStar'
  },
  toggleStar: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var starred = !this.model.get('starred');
    this.model.set('starred', !this.model.get('starred'));
    this.model.save(null, {
      success: function() {
        $(e.currentTarget).find("span").toggleClass('gold', starred)
      }
    })
  },
  toggleBoardRename: function(e) {
    e.stopPropagation();
    if (this.renameBoardView) {
      this.removeRenameForm();
    } else {
      this.renameBoardView = new RenameBoardView({model: this.model});
      this.$el.append(this.renameBoardView.$el);
      this.$("#new_name").focus().select();
    }
  },
  removeRenameForm: function() {
    this.renameBoardView.remove();
    delete this.renameBoardView;
  },
  addList: function(e) {
    e.stopPropagation();
    var id = this.model.get('id');
    var addList = new NewListButtonView({ model: { 'board_id': id}});
    $(e.currentTarget).prepend(addList.$el);
    addList.$el.find("#add_list_name").focus();
  },
  cardView: function(e) {
    e.preventDefault();
    var $t = $(e.currentTarget);
    var id = +$t.attr("data-card-id");
    var listId = +$t.closest(".board_list").attr("data-list-id");
    App.trigger('cardView', id, listId);
  },
  changeTitle: function() {
    this.$(".board_name").text(this.model.get('title'))
  },
  initialize: function() {
    this.render();
    this.on('newList', this.renderList);
    this.listenTo(App, 'toggleRenameBoard', this.removeRenameForm)
    this.listenTo(this.model, "change:title", this.changeTitle)
  }
});