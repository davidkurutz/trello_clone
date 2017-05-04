var ListView = Backbone.View.extend({
  template: App.templates.list,
  tagName: "li",
  className: "board_list",
  attributes: function() {
    var id = +this.model.get('id');
    return {
      "data-list-id": id
    }
  },
  events: {
    'click': 'stopPropagation',
    'click .list_actions': 'toggleListActions',
    'click footer a' : 'newCard'
  },
  stopPropagation: function(e) {
    e.stopPropagation();
  },
  newCard: function(e) {
    e.preventDefault();
    e.stopPropagation();

    this.stopListening(App)

    var ncv = new NewCardView({ model: this.model });

    this.$(".cards").append(ncv.$el);
    this.$("footer").hide();
    this.$("textarea").focus();
    this.listenTo(App, 'appendCard', this.appendCard)
    this.listenTo(ncv, 'showFooter', this.showFooter)
  },
  showFooter: function() {
    this.$("footer").show();
  },
  toggleListActions: function(e) {
    e.stopPropagation();
    var id;

    if (this.$(".list_actions_menu")[0]) {
      App.trigger('remove_list_actions_menu')
    } else {
      id = this.model.get('id');
      this.$el.append(new ListActionsView({
        attributes: { 'data-list-id': id},
        model: this.model
      }).$el);
    }
  },
  appendCard: function(card) {
    if (+card.get("list_id") === this.model.get("id")) {
      var last = this.$("ul.cards li:last-child");
      last.before(new CardOverviewView({ model: card}).$el);
    }

  },
  render: function() {
    var cards = this.model.get('Cards');
    this.$el.html(this.template(this.model.toJSON()));

    var list = this.$("ul.cards");
    
    cards.forEach(function(card) {
      list.append(new CardOverviewView({ model: card}).$el)
    })
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'destroy', this.remove);
  }
});