var CardOverviewView = Backbone.View.extend({
  template: App.templates.card_overview,
  tagName: 'li',
  className: 'card',
  events: {
    // 'click': 'showDetail'
  },
  attributes: function() {
    var id = +this.model.get('id');
    return {
      'data-card-id' : id
    };
  },
  archiveCard: function(e) {
    e.stopPropagation();
    this.model.destroy();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'destroy', this.remove);
  }
});