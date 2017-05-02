var path = require('path');
var fs = require('fs');
var _ = require('underscore');
var file_path = path.resolve(path.dirname(__dirname), 'data/boards.json');

module.exports = {
  get: function(id) {
    var boards = this.getData();

    if (id) {
      console.log(_.findWhere(boards, {id: id}));
      return _.findWhere(boards, {id: id});
    } else {
      return boards;
    }
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
  set: function(data, id) {
    id = id ? id++ : this.getCurrentId();
    this.write({ data: data, currentId: +id});
  },
  addBoard: function(board) {
    var boards = this.get();
    var id = this.getCurrentId();

    var obj = {
      id: id,
      createdBy: 1,
      createdOn: new Date(),
      starred: false,
      open: true,
      archived: false
    };

    _.extend(board, obj);
    boards.push(board);
    this.set(boards, id + 1);
    return board;
  },
  removeBoard: function(board) {
    var id = item.id;
    var boards = this.get();
    var existing_b = _.findWhere(boards, {id: id});

    boards = _.without(boards, existing_b);

    this.set(boards);
  }
};