var CreateBoardFormView = BaseView.extend({
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
    var board;

    f.forEach(function(input) {
      obj[input.name] = input.value;
    });

    board = new Board();

    board.save(obj, {
      context: this,
      success: function(json) {
        App.trigger('addBoard', json);
        this.close()
        router.navigate("/b/" + json.id + "/" + uri(json.attributes.title), {trigger: true})
      }
    })
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