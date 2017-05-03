var CardOverviewView = Backbone.View.extend({
  template: App.templates.card_overview,
  tagName: 'li',
  className: 'card',
  attributes: function() {
    var id = +this.model.get('id');
    return {
      'data-card-id' : id
    };
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
  }
});