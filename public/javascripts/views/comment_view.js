var CommentView = Backbone.View.extend({
  template: App.templates.comment,
  tagName: 'li',
  events: {
    "click .delete_comment" : "deleteComment"
  },
  deleteComment: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.model.destroy()
  },
  id: function() {
    return 'comment_' + this.model.get('id');
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'destroy', this.remove)
  }
})