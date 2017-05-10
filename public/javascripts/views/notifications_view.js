var NotificationsView = Backbone.View.extend({
  template: App.templates.notifications,
  id: 'notifications',
  events: {
    'click' : 'stop',
    'click div.close': 'toggle'
  },
  stop: function(e) {
    e.stopPropagation()
  },
  toggle: function() {
    this.$el.toggle();
  },
  close: function() {
    this.$el.toggle(false);
  },
  render: function() {
    this.$el.html(this.template);
  },
  initialize: function() {
    this.render();
    this.listenTo(App, 'closePopup', this.close)
  }
});