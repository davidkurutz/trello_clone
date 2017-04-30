var path = require('path'),
    fs = require('fs'),
    _ = require('underscore'),
    file_path = path.resolve(path.dirname(__dirname), 'data/boards.json');

module.exports = {
  get: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8")).data
  },
  write: function(data) {
    fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
  },
  set: function(data) {
    this.write({ data: data })
  },
  addBoard: function(board) {
    var id = item.id;
    var boards = this.get();

    boards.push(board)

    this.set(boards);
  },
  removeBoard: function(board) {
    var id = item.id;
    var boards = this.get();
    var existing_b = _.findWhere(boards, {id: id});

    boards = _.without(boards, existing_b)

    this.set(boards)
  }
}