var BoardView = Backbone.View.extend({
  el: "main",
  template: App.templates.board,
  renameTemplate: App.templates.rename_board,
  events: {
    'click .add_list': 'addList',
    'click .board_name': 'toggleBoardRename',
    'click div.star' : 'toggleStar'
  },
  ajax: function(id, data) {
    $.ajax({
      url: "/lists/" + id + "/card_order",
      type: "post",
      data: data,
      success: function() {}
    });
  },
  render: function() {
    var board = this.model.toJSON();
    var lists = board.Lists;
    var id = this.model.get("id");

    this.$el.removeClass().html(this.template({ board: board }));
    lists.forEach(this.renderList.bind(this));
    
    this.sortableLists();
    this.sortableCards();
  },
  sortableLists: function() {
    var id = this.model.get('id');

    $("#listlist").sortable({
        helper: "clone",
        items: ".board_list",
        opacity: 0.75,
        scroll: false,
        update: function(event, ui) {
          var data = $("#listlist").sortable('serialize');
          $.ajax({
            url: "/boards/" + id + "/list_order",
            type: "post",
            data: data,
            success: function() {

            }
          });
        }
      });
  },
  sortableCards: function() {
    var self = this;
    var sourceList;
    var destList;
    var receiver;
    var stopTarget;

    $(".cards").sortable({
      connectWith: ".cards",
      helper: "clone",
      opacity: 0.75,
      scroll: false,
      start: function(e, ui) {
        sourceList = $(e.target).attr('id');
      },
      receive: function(e, ui) {
        receiver = $(e.target).attr("id");
      },
      stop: function(e, ui) {
        stopTarget =  $(e.target).attr('id');
        destList = receiver ? receiver : stopTarget;

        var destData = $("#" + destList).sortable('serialize');
        var destId = destList.replace(/cards-/g, '');
        var sourceData;
        self.ajax(destId, destData);
        if (!(sourceList === destList)) {
          sourceData = $("#" + sourceList).sortable('serialize');
          sourceId = sourceList.replace(/cards-/g, '');
          self.ajax(sourceId, sourceData);
        }
      }
    });
  },
  renderList: function(list) {
    this.$("#listlist li.add_list").before(new ListView({ model: list}).$el);
  },
  toggleStar: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var starred = !this.model.get('starred');
    this.model.set('starred', !this.model.get('starred'));
    this.model.save(null, {
      success: function() {
        $(e.currentTarget).find("span").toggleClass('gold', starred);
      }
    });
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
    this.$(".board_name").text(this.model.get('title'));
  },
  initialize: function() {
    this.render();
    this.on('newList', this.renderList);
    this.listenTo(App, 'toggleRenameBoard', this.removeRenameForm);
    this.listenTo(this.model, "change:title", this.changeTitle);
    this.listenTo(App, 'sortableCards', this.sortableCards)
  }
});