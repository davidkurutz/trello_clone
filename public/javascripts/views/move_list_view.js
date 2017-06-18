var MoveListView = BaseView.extend({
  id: 'move_list',
  template: App.templates.move_list,
  events: {
    'click #select_board': 'showBoardSelect'
  },
  showBoardSelect: function(e) {
    e.stopPropagation();
    var $db = this.$("#destination_board")
    $db.show();
    $db.attr('size', $db.find('option').length + 1);
  },
  render: function() {
    this.$el.html(this.template( {
      model: this.model.toJSON(),
      board_name: App.Board.get("title"),
      position: this.model.get('sort_order') + 1,
      boards: App.Boards.toJSON().map(function(b) { return {id: b.id, title: b.title } })
    }
    ));
  },
  initialize: function() {
    this.render();
  }
});