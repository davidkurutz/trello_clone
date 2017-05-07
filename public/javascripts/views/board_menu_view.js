var BoardMenuView = BaseView.extend({
  template: App.templates.board_menu,
  id: "boardMenu",
  events: {
    'click': 'stop',
    'click #toggle_starred': "toggleStarred",
    'click #toggle_recent': "toggleRecent",
    'click #toggle_personal': "togglePersonal",
    'click #create_new_board': "createNewBoard",
    'click #always_keep_open': "toggleKeepOpen",
    'click #see_closed_boards': "seeClosedBoards"
  },
  toggleIcon: function(e) {
    $(e.target).toggleClass('icon-add').toggleClass('icon-remove');
  },
  toggleStarred: function(e) {
    this.toggleIcon(e);
    this.$("#starred_list").toggle()
  },
  toggleRecent: function(e) {
    this.toggleIcon(e);
    this.$("#recent_list").toggle()
  },
  togglePersonal: function(e) {
    this.toggleIcon(e);
    this.$("#personal_list").toggle()
  },
  createNewBoard: function(e) {
    e.preventDefault()
    alert('create')
  },
  toggleKeepOpen: function(e) {
    e.preventDefault()
    alert('keep open')
  },
  seeClosedBoards: function(e) {
    e.preventDefault()
  },
  renderStarred: function() {
    var starred = App.Boards.where({starred: true})
    this.$("#starred_list").empty()
    starred.forEach((function(board) {
      this.$("#starred_list").append(new BoardMenuItemView({
        model: board
      }).$el)
    }).bind(this))
  },
  renderPersonal: function() {
    var personal = App.Boards.models;
    personal.forEach((function(board) {
      this.$("#personal_list").append(new BoardMenuItemView({
        model: board
      }).$el)
    }).bind(this))
  },
  render: function() {
    this.$el.html(this.template({}));
    this.renderStarred()
    this.renderPersonal()
  },
  hide: function() {
    this.$el.hide();
  },
  initialize: function() {
    this.render();
    this.listenTo(App, 'closePopup', this.hide);
    this.listenTo(App, 'toggleStarredX', this.renderStarred)
  }
});