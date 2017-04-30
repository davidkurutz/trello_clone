var ListView = Backbone.View.extend({
  tagName: "li",
  className: "board_list",
  template: App.templates.list,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
  }
});