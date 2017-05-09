var RenameBoardView = BaseView.extend({
  template: App.templates.rename_board,
  id: 'rename_board_form',
  events: {
    'click': 'stop',
    'click .close': 'close',
    'submit form': 'submit'
  },
  submit: function(e) {
    e.preventDefault();
    var data = $(e.target).serializeArray();
    var obj = {};

    data.forEach(function(input) {
      obj[input.name] = input.value;
    });

    this.model.save(obj, {
      context: this,
      success: function() {
        this.close();
      }
    });
  },
  close: function() {
    App.trigger('toggleRenameBoard');
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
    this.listenTo(App, 'closePopup', this.close);
  }
});