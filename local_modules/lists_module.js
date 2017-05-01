var path = require('path');
var fs = require('fs');
var _ = require('underscore');
var file_path = path.resolve(path.dirname(__dirname), 'data/lists.json');

module.exports = {
  get: function(id) {
    var lists = this.getJSON();

    if (id) {
      return _.findWhere(lists, {id: id});
    } else {
      return lists;
    }
  },
  getByBoardId: function(id) {
    var lists = this.getJSON();
    return _.where(lists, {board_id: id});
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