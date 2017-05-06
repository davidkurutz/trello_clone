var QuickEditView = Backbone.View.extend({
 template: App.templates.quick_edit,
  className: "cover_modal",
  events: {
    "click #quick_edit" : "stop",
    "click": "close",
    "click #archive_card": "archive",
    "submit form": "submit",
    "keypress": "keypress"
  },
  archive: function(e) {
    e.stopPropagation();
    this.model.destroy();
    this.close();
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
  keypress: function(e) {
    if(e.keyCode === 13) {
      e.preventDefault();
      this.submit(e);
    }
  },
  stop: function(e) {
    e.stopPropagation();
  },
  close: function(e) {
    this.remove();
  },
  render: function(options) {
    this.$el.html(this.template(this.model.toJSON()));
    this.$("#quick_edit").css(options.offset);
    $("body").append(this.$el);
    this.$("textarea").select();
  },
  initialize: function(options) {
    this.render(options);
  }
});