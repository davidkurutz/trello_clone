var RenameBoardView = Backbone.View.extend({
  template: App.templates.rename_board,
  id: 'rename_board_form',
  events: {
    'click .close': 'close',
    'click': 'stop',
    'submit form': 'submit'
  },
  submit: function(e) {
    e.preventDefault();
    var data = $(e.target).serializeArray();
    var obj = {};

    data.forEach(function(input) {
      obj[input.name] = input.value;
    })

    this.model.save(obj, {
      context: this,
      success: function() {
        this.close()
      }
    });

  },
  close: function() {
    App.trigger('toggleRenameBoard');
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