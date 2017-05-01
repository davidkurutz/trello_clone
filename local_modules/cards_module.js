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
    var cards = this.getJSON();
    return _.where(cards, {list_id: list_id});
  },
  getJSON: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8")).data
  },
  write: function(data) {
    fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
  },
  set: function(data) {
    this.write({ data: data })
  }
  // ,
  // addList: function(list) {
  //   var id = item.id;
  //   var lists = this.get();

  //   lists.push(list)

  //   this.set(lists);
  // },
  // removeList: function(list) {
  //   var id = item.id;
  //   var lists = this.get();
  //   var existing_l = _.findWhere(lists, {id: id});

  //   lists = _.without(boards, existing_l)

  //   this.set(lists)
  // }
}