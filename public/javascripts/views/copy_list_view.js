var CopyListView = Backbone.View.extend({
  template: App.templates.copy_list,
  events: {
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
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
  }
})