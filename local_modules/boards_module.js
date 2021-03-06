var path = require('path');
var fs = require('fs');
var _ = require('underscore');
var file_path = path.resolve(path.dirname(__dirname), 'data/boards.json');

module.exports = {
  get: function(id) {
    var boards = this.getData();

    if (id) {
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
  set: function(attributes) {
    var json = this.getJSON();
    _.extend(json, attributes);

    this.write(json);
  },
  addBoard: function(board) {
    var boards = this.getData();
    var id = this.getCurrentId();

    var obj = {
      id: id,
      createdBy: 1,
      createdOn: new Date(),
      starred: false
    };

    _.extend(obj, board);
    boards.push(obj);
    this.set({ "data": boards, "currentId": id + 1 });
    return obj;
  },
  remove: function(id) {
    var boards = this.get();
    var existing_b = _.findWhere(boards, {id: id});

    boards = _.without(boards, existing_b);

    this.set({ "data": boards});
  },
  update: function(boardId, newData) {
    var boards = this.getData();
    var board = _.findWhere(boards, {id: +boardId});
    _.extend(board, newData);
    this.set({ data: boards });
    return board;
  },
};