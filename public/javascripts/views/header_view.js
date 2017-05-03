var HeaderView = Backbone.View.extend({
  el: "header",
  template: App.templates.header,
  render: function() {
    this.$el.html(this.template());
  },
  events: {
    'click #board-btn' : 'toggleBoardMenu'
  },
  boardsView: function() {
    App.trigger('boardsView');
  },
  removeBoardMenu: function(){
    App.trigger('removeBoardMenu');
  },
  toggleBoardMenu: function(e) {
    e.stopPropagation();
    App.trigger('toggleBoardMenu');
  },
  initialize: function() {
    this.render();
  }
});