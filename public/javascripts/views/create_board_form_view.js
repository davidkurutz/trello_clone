var CreateBoardFormView = Backbone.View.extend({
  template: App.templates.create_board_form,
  className: "create_board",
  events: {
    "click": "stop",
    "click .close": "close",
    "submit form" : "submit"
  },
  submit: function(e) {
    e.preventDefault();
    var f = this.$("form").serializeArray();
    var obj = {};

    f.forEach(function(input) {
      obj[input.name] = input.value;
    });

    $.ajax({
      url: "/b",
      type: "POST",
      context: this,
      data: obj,
      success: function(json) {
        App.trigger('addBoard', json);
        this.close();
      }
    });
  },
  stop: function(e) {
    e.stopPropagation()
  },
  close: function() {
    this.remove();
  },
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
    this.listenTo(App, 'closePopup', this.remove);
  }
});