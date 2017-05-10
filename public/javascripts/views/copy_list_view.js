var CopyListView = BaseView.extend({
  template: App.templates.copy_list,
  events: {
    'submit form': 'submit',
    'keypress': 'submitme'
  },
  submitme: function(e) {
   if(e.keyCode === 13) {
      e.preventDefault();
      this.submit(e);
    }
  },
  submit: function(e) {
    e.preventDefault();
    var data = this.$('form').serializeArray();
    var cards = this.model.get('Cards');
    var obj = {};
    var newList;
    
    var newListId;

    data.forEach(function(input) {
      obj[input.name] = input.value;
    });

    newList = new List();
    newList.save(obj, {
      context: this,
      success: function(json) {
        newListId = json.id;
        App.trigger('addList', json);
        this.populateCards(newListId, cards);
      }
    });
  },
  populateCards: function(newListId, cards) {
    var newCards = cards.clone();
    newCards.models.forEach(function(model) {
      delete model.attributes.created_on;
      delete model.attributes.id;
      model.set('list_id', +newListId);
      model.save();
    });
    App.trigger('closePopup');
    this.remove();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
  }
});