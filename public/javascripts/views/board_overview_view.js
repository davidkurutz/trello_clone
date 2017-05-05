var BoardOverviewView = Backbone.View.extend({
  template: App.templates.board_overview,
  tagName: "li",
  events: {
    "click .icon-star": "toggleStar"
  },
  toggleStar: function(e) {
    e.preventDefault();
    e.stopPropagation();

    var board = this.model;

    var starred = !board.get("starred");

    board.save({"starred": starred}, {
      context: this,
      success: function(json) {
        $(e.target).toggleClass('gold', starred);
        App.trigger('toggleStarred', this.model);
      }
    });
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.listenTo(this.model, 'change', this.render);
  },
  initialize: function() {
    this.render();
  }
});