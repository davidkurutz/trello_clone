var NewListButtonView = Backbone.View.extend({
  template: App.templates.new_list_button,
  id: 'new_list',
  events: {
    'click': 'stop',
    'click div.close': 'close',
    'submit form': 'submit'
  },
  stop: function(e) {
    e.stopPropagation();
  },
  submit: function(e) {
    e.preventDefault();
    var data = this.$("form").serializeArray();
    var obj = {};

    data.forEach(function(input) {
      obj[input.name] = input.value
    });

    $.ajax({
      context: this,
      url: '/lists/' + obj.board_id,
      type: 'POST',
      data: obj,
      success: function(json) {
        App.trigger('addList', json)
        this.$("#add_list_name").val('');
      }
    })
  },
  close: function() {
    this.remove();
  },
  render: function() {
    this.$el.html(this.template(this.model));
  },
  initialize: function() {
    this.render();
    this.listenTo(App, 'closePopup', this.remove)
  }
});