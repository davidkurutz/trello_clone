var ListView = Backbone.View.extend({
  tagName: "li",
  className: "board_list",
  template: App.templates.list,
  render: function() {
    alert('listview');
    this.$el.html(this.template({
      model: this.model.toJSON(),
      Cards: this.model.get("Cards").toJSON()
    }));
  },
  initialize: function() {
    this.render();
  }
});