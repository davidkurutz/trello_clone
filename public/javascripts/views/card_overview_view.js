var CardOverviewView = Backbone.View.extend({
  template: App.templates.card_overview,
  tagName: 'li',
  className: 'card',
  id: function() {
    return 'card-' + this.model.get('id');
  },
  events: {
    'click a': 'showDetail',
    'click span.edit': 'quickEdit'
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
    var listId = this.model.get('list_id');
    var listName = App.Board.get('Lists').get(listId).get('name');
    new CardView({model: this.model, listName: listName});
    router.navigate($(e.currentTarget).attr('href'));
  },
  archiveCard: function(e) {
    e.stopPropagation();
    this.model.destroy();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.trigger('sortableCards');
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(App, 'renderCardOverview', this.render);
  }
});