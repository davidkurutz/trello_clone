var NewCardView = BaseView.extend({
  template: App.templates.new_card,
  tagName: 'li',
  className: "new_card",
  events: {
    'click div.close': 'close',
    'submit form': 'submit',
    'keypress' : 'submitOnEnter'
  },
  submit: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var data = this.$("form").serializeArray();
    var obj = {};
    var model = this.model;

    data.forEach(function(input) {
      obj[input.name] = input.value;
    });

    var c = new Card();

    c.save(obj, {
      success: function(json) {
        model.get('Cards').add(json);
        App.trigger('appendCard', c);
        this.$('#card_name').val('').focus();
      }
    });
  },
  close: function() {
    this.trigger('showFooter');
    this.remove();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
    this.listenTo(App, 'closePopup', this.close);
  }
});