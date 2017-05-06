var BoardMenuView = BaseView.extend({
  template: App.templates.board_menu,
  id: "boardMenu",
  events: {
    'click': 'stop'
  },
  render: function() {
    this.$el.html(this.template({}));
  },
  hide: function() {
    this.$el.hide();
  },
  initialize: function() {
    this.render();
    this.listenTo(App, 'closePopup', this.hide);
  }
});