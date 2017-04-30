var HeaderView = Backbone.View.extend({
  el: "header",
  template: App.templates.header,
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
  }
})