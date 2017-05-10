var EditCardDescriptionView = Backbone.View.extend({
  template: App.templates.edit_card_description,
  id: 'edit_description_form',
  events: {
    'submit form': 'submit',
    'click .close': 'close'
  },
  close: function(e) {
    e.stopPropagation();
    App.trigger('renderCardView');
  },
  submit: function(e) {
    e.preventDefault();
    var data = this.$('form').serializeArray();
    var obj = {};

    data.forEach(function(input) {
      obj[input.name] = input.value;
    });

    this.model.save(obj, {
      context: this,
      success: function(json) {
        this.remove();
      }
    });
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
  }
});