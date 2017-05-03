var ListView = Backbone.View.extend({
  tagName: "li",
  className: "board_list",
  attributes: function() {
    var id = +this.model.get('id');
    return {
      "data-list-id": id
    }
  },
  template: App.templates.list,
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
  }
});