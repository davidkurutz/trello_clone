var MoveListView = BaseView.extend({
  template: App.templates.move_list,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
  }
});