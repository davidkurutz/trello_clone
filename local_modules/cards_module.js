var path = require('path');
var fs = require('fs');
var _ = require('underscore');
var file_path = path.resolve(path.dirname(__dirname), 'data/cards.json');

module.exports = {
  get: function(id) {
    var cards = this.getData();
    if (id) {
      return _.findWhere(cards, {id: id});
    } else {
      return cards;
    }
  },
  getCurrentCommentId: function() {
    return this.getJSON().currentCommentId;
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
  addComment: function(comment) {
    var cards = this.getData();
    var cardId = +comment.card_id;

    var card = _.findWhere(cards, {id: cardId});
    var comments = card.Comments;

    var commentId = this.getCurrentCommentId();
    var obj = {
      id: commentId,
      created_by: 1,
      created_on: new Date(),
    };

    _.extend(obj, comment);

    obj.card_id = +obj.card_id;
    comments.push(obj);
    this.set({"data": cards, 'currentCommentId': commentId + 1});
    
    return obj;
  },
  removeComment: function(cardId, commentId) {
    var cards = this.getData();
    var card = _.findWhere(cards, {id: cardId});
    var comments = card.Comments;
    comments = _.reject(comments, {id: commentId});
    card.Comments = comments;
    this.set({"data": cards});
  },
  updateComment: function(cardId, commentId, data) {
    var cards = this.getData();
    var card = _.findWhere(cards, {id: cardId });
    var comments = card.Comments;
    var comment = _.findWhere(comments, {id: commentId});

    _.extend(comment, data);
    card.Comments = comments;
    this.set({"data": cards});
    return comment;
  },
  remove: function(id) {
    var cards = this.getData();
    var existing_c = _.findWhere(cards, {id: id});

    cards = _.without(cards, existing_c);

    this.set({"data": cards});
  },
  update: function(cardId, newData) {
    var cards = this.getData();
    var card = _.findWhere(cards, {id: +cardId});
    _.extend(card, newData);

    if (!newData.duedate) {
      delete card.duedate;
      delete card.completed;
    }
    this.set({ data: cards });
    return card;
  },
};