var CommentView = Backbone.View.extend({
  template: App.templates.comment,
  commentFormTemplate: App.templates.comment_form,
  tagName: 'li',
  events: {
    'click .delete_comment' : 'deleteComment',
    'click .edit_comment' : 'editComment',
    'submit #comment_edit_form': 'submitEdits',
    'click #comment_edit_form div.close': 'close'
  },
  close: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.$el.html(this.template(this.model.toJSON()));
  },
  submitEdits: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var $f = $(e.target).serializeArray();
    var obj = {};

    $f.forEach(function(input) {
      obj[input.name] = input.value;
    });

    this.model.save(obj, {
      context: this,
      success: function(json) {
        this.$el.html(this.template(this.model.toJSON()));
      }
    });
  },
  editComment: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.$el.html(this.commentFormTemplate(this.model.toJSON()));
  },
  deleteComment: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var cardId = +this.model.get('card_id');
    var id = +this.model.get('id');

    this.model.destroy({
      success: function(json) {
        var comments = App.Card.get('Comments');
        comments = _.reject(comments, {id: id});
        App.Card.set('Comments', comments);
        App.trigger('renderCardOverview');
      }
    });

  },
  id: function() {
    return 'comment_' + this.model.get('id');
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'destroy', this.remove);
  }
});