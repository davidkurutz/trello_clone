var BoardOverviewView = Backbone.View.extend({
  template: App.templates.board_overview,
  tagName: 'li',
  id: function() {
    return 'board_' + this.model.get('id');
  },
  events: {
    'click .icon-star': 'toggleStar',
    'click a': 'board'
  },
  board: function(e) {
    e.preventDefault();
    e.stopPropagation();

    router.navigate($(e.currentTarget).attr('href'), { trigger: true });
  },
  toggleStar: function(e) {
    e.preventDefault();
    e.stopPropagation();

    var board = this.model;
    var starred = !board.get('starred');

    if (starred) {
      board.set('sort_order', +App.Boards.where({'starred': true}).length + 1);
    } else {
      board.unset('sort_order');
    }

    board.save({'starred': starred}, {
      context: this,
      success: function(json) {
        $(e.target).toggleClass('gold', starred);
        App.trigger('toggleStarred', this.model);
      }
    });
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'change:starred', this.render);
  }
});