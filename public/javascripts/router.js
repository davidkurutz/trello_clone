var router = new (Backbone.Router.extend({
  routes: {
    "": "boards",
    "b/:id/*": "board",
    "menu": "index"
  },
  boards: function() { 
    App.boardsView();
  },
  board: function(id) {
    App.boardView(id);
  }
}))();

Backbone.history.start({
  pushState: true,
});

$(document).on("click", "a[href^='/']", function(e) {
  e.preventDefault();
  router.navigate($(e.currentTarget).attr("href").replace(/^\//, ''), { trigger: true });
});