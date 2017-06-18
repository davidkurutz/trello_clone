var HeaderView = Backbone.View.extend({
  el: 'header',
  template: App.templates.header,
  render: function() {
    this.$el.html(this.template());
  },
  events: {
    'click #board-btn' : 'toggleBoardMenu',
    'click .create': 'toggleCreateMenu',
    'click .notification': 'toggleNotifications'
  },
  toggleCreateMenu: function(e) {
    e.stopPropagation();
    App.trigger('toggleCreateMenu');
  },
  toggleNotifications: function(e) {
    e.stopPropagation();
    App.trigger('toggleNotifications');
  },
  toggleBoardMenu: function(e) {
    e.stopPropagation();
    App.trigger('toggleBoardMenu');
  },
  initialize: function() {
    this.render();
  }
});