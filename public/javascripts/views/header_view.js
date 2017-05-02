var HeaderView = Backbone.View.extend({
  el: "header",
  template: App.templates.header,
  render: function() {
    this.$el.html(this.template());
  },
  events: {

  },
  boardsView: function() {
    App.trigger('boardsView');
  },
  initialize: function() {
    this.render();
  }
});