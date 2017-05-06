var BaseView = Backbone.View.extend({
  submitOnEnter: function(e) {
   if(e.keyCode === 13) {
      e.preventDefault();
      console.log(this)
      this.submit(e);
    }
  },
  stop: function(e) {
    e.stopPropagation();
  },
});