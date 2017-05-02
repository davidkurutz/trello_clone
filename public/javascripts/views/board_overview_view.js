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
    var id = board.get("id");
    var starred = !board.get("starred");

    $.ajax({
      url: "/b/" + id,
      type: "PUT",
      context: this,
      data: { "starred": starred },
      success: function(json) {
        board.set(json);
        this.render();
        App.trigger('toggleStarred', this.model);
      }
    });
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.listenTo(this.model, 'change', this.render)
  },
  initialize: function() {
    this.render();
  }
});