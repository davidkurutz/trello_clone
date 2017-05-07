var path = require('path');
var fs = require('fs');
var _ = require('underscore');
var file_path = path.resolve(path.dirname(__dirname), 'data/comments.json');

module.exports = {
  get: function(id) {
    var comments = this.getData();
    if (id) {
      return _.findWhere(comments, {id: id});
    } else {
      return comments;
    }
  },
  getByCardId: function(card_id) {
    var comments = this.getData();
    return _.where(comments, {list_id: card_id});
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
  addCard: function(comment) {
    var comments = this.getData();
    var id = this.getCurrentId();
    var obj = {
      id: id,
      created_by: 1,
      created_on: new Date(),
    };

    _.extend(obj, comment);
    obj.list_id = +obj.list_id;
    comments.push(obj);
    this.set({"data": comments, 'currentId': id + 1});
    return obj;
  },
  remove: function(id) {
    var comments = this.getData();
    var existing_c = _.findWhere(comments, {id: id});

    comments = _.without(comments, existing_c);

    this.set({"data": comments});
  },
  update: function(commentId, newData) {
    var comments = this.getData();
    var comment = _.findWhere(comments, {id: +cardId});
    _.extend(comment, newData);

    this.set({ data: comments });
    return comment
  },
};