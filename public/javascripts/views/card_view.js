var CardView = BaseView.extend({
  template: App.templates.card,
  className: "cover_modal",
  events: {
    "click": "close",
    "click div.close": "close",
    "click .card_detail": "stop",
    "blur .edit_title": "editTitle",
    "click .edit-description": 'editDescription',
    "click #archive-card": 'archiveCard',
    "click #dueDate": "changeDueDate",
    "click div.square": "colorize",
    "click div.clickable_due_date a": "changeDueDate",
    "submit #comment_form": "sendComment"
  },
  sendComment: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var $f = this.$("#comment_form").serializeArray();
    var obj = {};
    var id = this.model.get("id");

    $f.forEach(function(input) {
      obj[input.name] = input.value;
    });

    obj.card_id = this.model.get("id");

    $.ajax({
      url: "/cards/" + id + "/comments",
      type: 'POST',
      context: this,
      data: obj,
      success: function(json) {
        this.addComment(json);
        this.$("#comment_text").val('');
      }
    });
  },
  addComment: function(json) {
    var comment = new Comment(json)
    this.$("#activity_feed").append(new CommentView({ model: comment }).$el);
  },
  colorize: function(e) {
    $(e.target).closest(".clickable_due_date").css('background', '#99E585');
    $(e.target).closest(".clickable_due_date").addClass('greenCheck');
  },
  editDescription: function(e) {
    e.preventDefault();

    this.$(".description")
      .append(new EditCardDescriptionView({
        model: this.model
      }).$el);

    this.$(".go_away").hide();
    this.$("#description").focus().select();
  },
  editTitle: function(e) {
    var title = $(e.target).text();
    this.model.set('name', title);
    this.model.save();
  },
  close: function(e) {
    this.remove();
    router.navigate("/b/" + App.Board.get("id"));
  },
  render: function(options) {
    var comments = this.model.get("Comments");
    
    this.listName = this.listName || options.listName;
    
    this.$el.html(this.template({
      model: this.model.toJSON(),
      listName: this.listName
    }));

    $("body").append(this.$el);

    comments.forEach(function(comment) {
      var c = new Comment(comment)
      $("#activity_feed").append(new CommentView({
        model: c
      }).$el)
    })
  },
  initialize: function(options) {
    this.render(options);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(App, 'renderCardView', this.render);
  }
});