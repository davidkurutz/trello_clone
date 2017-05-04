var path = require('path');
var fs = require('fs');
var _ = require('underscore');
var file_path = path.resolve(path.dirname(__dirname), 'data/cards.json');

module.exports = {
  get: function(id) {
    var cards = this.getJSON();

    if (id) {
      return _.where(cards, {id: id});
    } else {
      return cards;
    }
  },
  getByListId: function(list_id) {
    var cards = this.getData();
    return _.where(cards, {list_id: list_id});
  },
  getJSON: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8"));
  },
  getData: function() {
    return this.getJSON().data;
  },
  getCurrentId: function() {
    return this.getJSON().currentId;
  },
  write: function(data) {
    fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
  },
  set: function(attributes) {
    var json = this.getJSON();
    _.extend(json, attributes);

    this.write(json);
  },
  addCard: function(card) {
    var cards = this.getData();
    var id = this.getCurrentId();
    var obj = {
      id: id,
      created_by: 1,
      created_on: new Date(),
    };

    _.extend(obj, card);
    obj.list_id = +obj.list_id;
    cards.push(obj);
    this.set({"data": cards, 'currentId': id + 1});
    return obj;
  },
  remove: function(id) {
    var cards = this.getData();
    var existing_c = _.findWhere(cards, {id: id});

    cards = _.without(cards, existing_c);

    this.set({"data": cards});
  }
};