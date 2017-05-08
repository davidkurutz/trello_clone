var Lists = Backbone.Collection.extend({
  model: List,
  comparator: 'sort_order',
  getCards: function(callback1) {
    var count = 0;
    var increment = (function() {
      count++;
      if (count === this.models.length) {
        callback1();
      }
    }).bind(this);

    if (this.models.length === 0) {
      callback1();
    } else {
      this.models.forEach(function(m) {
        m.getCards(increment);
      });
    }
  }
});