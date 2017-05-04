var BoardView = Backbone.View.extend({
  el: "main",
  template: App.templates.board,
  render: function() {
    var board = this.model.toJSON();
    var lists = board.Lists;

    this.$el.removeClass().html(this.template({ board: board }));
    lists.forEach(this.renderList.bind(this));
  },
  renderList: function(list) {
    this.$("#listlist li.add_list").before(new ListView({ model: list}).$el);
  },
  events: {
    'click .add_list': 'addList'
  },
  addList: function(e) {
    e.stopPropagation();
    var id = this.model.get('id')
    var addList = new NewListButtonView({ model: { 'board_id': id}});
    $(e.currentTarget).prepend(addList.$el);
    addList.$el.find("#add_list_name").focus()
  },
  cardView: function(e) {
    e.preventDefault();
    var $t = $(e.currentTarget);
    var id = +$t.attr("data-card-id");
    var listId = +$t.closest(".board_list").attr("data-list-id");
    App.trigger('cardView', id, listId);
  },
  initialize: function() {
    this.render();
    this.on('newList', this.renderList)
  }
});