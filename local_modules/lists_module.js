var path = require('path');
var fs = require('fs');
var _ = require('underscore');
var file_path = path.resolve(path.dirname(__dirname), 'data/lists.json');

module.exports = {
  get: function(id) {
    var lists = this.getData();

    if (id) {
      return _.findWhere(lists, {id: id});
    } else {
      return lists;
    }
  },
  getByBoardId: function(id) {
    var lists = this.getData();
    return _.where(lists, {board_id: id});
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
  addList: function(list) {
    var lists = this.get();
    console.log(lists);
    var id = this.getCurrentId();
    var obj = {
      id: id,
      createdBy: 1,
      createdOn: new Date(),
    };

    _.extend(list, obj);
    list.board_id = +list.board_id;
    
    lists.push(list);
    this.set({ "data": lists, "currentId": id + 1 });
    return list;
  },
  // removeList: function(list) {
  //   var id = item.id;
  //   var lists = this.get();
  //   var existing_l = _.findWhere(lists, {id: id});

  //   lists = _.without(boards, existing_l)

  //   this.set(lists)
  // }
};