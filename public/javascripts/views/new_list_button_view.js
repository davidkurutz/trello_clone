var NewListButtonView = BaseView.extend({
  template: App.templates.new_list_button,
  id: 'new_list',
  events: {
    'click': 'stop',
    'click div.close': 'close',
    'submit form': 'submit'
  },
  submit: function(e) {
    e.preventDefault();
    var data = this.$('form').serializeArray();
    var obj = {};
    var newList;

    data.forEach(function(input) {
      obj[input.name] = input.value;
    });

    newList = new List();

    newList.save(obj, {
      context: this,
      success: function(json) {
        App.trigger('addList', json);
        this.$('#add_list_name').val('');
      }
    });
  },
  close: function() {
    this.remove();
  },
  render: function() {
    this.$el.html(this.template(this.model));
  },
  initialize: function() {
    this.render();
    this.listenTo(App, 'closePopup', this.remove);
  }
});