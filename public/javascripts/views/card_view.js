var CardView = BaseView.extend({
  template: App.templates.card,
  className: "cover_modal",
  events: {
    "click": "close",
    "click div.close": "close",
    "click .card_detail": "stop",
    "blur .edit_title": "editTitle",
    "click .edit-description": 'editDescription'
  },
  editDescription: function(e) {
    e.preventDefault();

    this.$(".append_here")
      .append(new EditCardDescriptionView({
        model: this.model
      }).$el);

    this.$(".go_away").hide();
    this.$("#description").focus().select();
  },
  editTitle: function(e) {
    var title = $(e.target).text();
    this.model.set('name', title);
    this.model.save();
  },
  close: function(e) {
    this.remove();
    router.navigate("/b/" + App.Board.get("id"));
  },
  render: function(options) {
    this.listName = this.listName || options.listName;

    this.$el.html(this.template({
      model: this.model.toJSON(),
      listName: this.listName
    }));
    $("body").append(this.$el);
  },
  initialize: function(options) {
    this.render(options);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'change', this.render)
  }
});