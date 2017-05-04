var ListActionsView = Backbone.View.extend({
  template: App.templates.list_actions,
  className: "list_actions_menu",
  events: {
    "click .close": "remove",
    "click #archive_list": 'archiveList'
  },
  getId: function() {
    return +this.$el.attr('data-list-id');
  },
  archiveList: function(e) {
    e.stopPropagation();
    this.model.destroy();
  },
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
    this.listenTo(App, 'remove_list_actions_menu', this.remove)
  }
});