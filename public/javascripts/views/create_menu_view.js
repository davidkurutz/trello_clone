var CreateMenuView = Backbone.View.extend({
  template: App.templates.create_menu,
  createBoardTemplate: App.templates.create_board_form_sub,
  id: 'create_menu',
  events: {
    'click': 'stop',
    'click .close': 'toggle',
    'click #create_board': 'createBoard',
    'click .icon-back': 'back',
    'submit': 'submit'
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
        this.back();
        this.toggle();
        router.navigate("/b/" + json.id + "/" + uri(json.attributes.title), {trigger: true})
      }
    })
  },
  back: function(e) {
    this.render();
  },
  stop: function(e) {
    e.stopPropagation()
  },
  createBoard: function(e) {
    this.$el.html(this.createBoardTemplate())
  },
  toggle: function() {
    this.$el.toggle();
  },
  toggleFalse: function() {
    this.$el.toggle(false);
  },
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
    this.listenTo(App, 'closePopup', this.toggleFalse)
  }
});