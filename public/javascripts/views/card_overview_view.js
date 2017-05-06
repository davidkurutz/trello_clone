var CardOverviewView = Backbone.View.extend({
  template: App.templates.card_overview,
  tagName: 'li',
  className: 'card',
  events: {
    'click a': 'showDetail',
    'click span': 'quickEdit'
  },
  quickEdit: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var offset = this.$el.offset();
    
    new QuickEditView({
      model: this.model,
      offset: offset
    });
  },
  attributes: function() {
    var id = +this.model.get('id');
    return {
      'data-card-id' : id
    };
  },
  showDetail: function(e) {
    e.preventDefault();
    e.stopPropagation();
    new CardView({model: this.model});
    router.navigate($(e.currentTarget).attr("href"));
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
    this.listenTo(this.model, 'change:name', this.render);
  }
});