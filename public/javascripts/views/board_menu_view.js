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
    var starredBoards = App.Boards.where({ starred: true});
    starredBoards.forEach(function(board) {
      this.$("#starred_list").append(new BoardMenuItemView({
        model: board
      }).$el)
    })
  },
  toggleRecent: function(e) {
    this.toggleIcon(e);
    // alert('recent')
  },
  togglePersonal: function(e) {
    this.toggleIcon(e);
    // alert('personal')
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
  render: function() {
    this.$el.html(this.template({}));
  },
  hide: function() {
    this.$el.hide();
  },
  initialize: function() {
    this.render();
    this.listenTo(App, 'closePopup', this.hide);
  }
});