var Cards = Backbone.Collection.extend({
  model: Card,
  comparator: function(a, b) {
    return this.fc(a).localeCompare(this.fc(b));
  },
  fc: function(model) {
    return model.get('list_id') + '_' + model.get('sort_order');
  }
});