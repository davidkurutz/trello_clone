var ListView = BaseView.extend({
  template: App.templates.list,
  tagName: 'li',
  className: 'board_list',
  id: function() {
    return 'list-' + this.model.get('id');
  },
  attributes: function() {
    var id = +this.model.get('id');
    return {
      'data-list-id': id
    };
  },
  events: {
    'click': 'stop',
    'click .list_actions': 'toggleListActions',
    'click footer' : 'newCard',
    'click .edit_title': 'focus',
    'keypress .edit_title': 'captureReturn',
    'blur .edit_title': 'editTitle',
  },
  focus: function(e) {
    this.$('.edit_title').focus().select();
  },
  captureReturn: function(e) {
    if(e.keyCode === 13) {
      e.preventDefault();
      this.$('.edit_title').blur();
    }
  },
  editTitle: function(e) {
    var title = $(e.target).text();
    this.model.set('name', title);
    this.model.save();
  },
  newCard: function(e) {
    e.preventDefault();
    e.stopPropagation();

    this.stopListening(App);
    this.newCardView = new NewCardView({ model: this.model });
    this.$('.cards').append(this.newCardView.$el);
    this.$('footer').hide();
    this.$('textarea').focus();
    this.listenTo(App, 'appendCard', this.appendCard);
    this.listenTo(this.newCardView, 'showFooter', this.showFooter);
  },
  newCardTop: function(e) {
    this.stopListening(App);

    if (this.newCardView) {
      this.newCardView.remove();
      delete this.newCardView;
    }

    var ncv = new NewCardView({ model: this.model });

    this.$('.cards').prepend(ncv.$el);
    this.$('footer').hide();
    this.$('textarea').focus();
    this.listenTo(App, 'appendCard', this.prependCard);
    this.listenTo(ncv, 'showFooter', this.showFooter);
  },
  showFooter: function() {
    this.$('footer').show();
  },
  toggleListActions: function(e) {
    e.stopPropagation();
    var id;
    var state;

    if (this.$('.list_actions_menu')[0]) {
      state = true;
    } 
      
    App.trigger('closePopup');

    if (!state) {
      id = this.model.get('id');
      this.$el.append(new ListActionsView({
        attributes: { 'data-list-id': id},
        model: this.model
      }).$el);
    }
  },
  prependCard: function(card) {
    if (+card.get('list_id') === this.model.get('id')) {
      var form = this.$("ul.cards li.new_card");
      form.before(new CardOverviewView({ model: card}).$el);
    }
  },
  appendCard: function(card) {
    if (+card.get('list_id') === this.model.get('id')) {
      var last = this.$('ul.cards li:last-child');
      last.before(new CardOverviewView({ model: card}).$el);
    }
  },
  render: function() {
    var cards = this.model.get('Cards');
    this.$el.html(this.template(this.model.toJSON()));

    var list = this.$('ul.cards');
    
    cards.forEach(function(card) {
      list.append(new CardOverviewView({ model: card}).$el);
    });
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'add_card', this.newCardTop);
  }
});