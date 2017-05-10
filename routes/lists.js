var express = require('express');
var router = express.Router();
var path = require('path');
var _ = require('underscore');
var Lists = require(path.resolve(path.dirname(__dirname), 'local_modules/lists_module'));
var Cards = require(path.resolve(path.dirname(__dirname), 'local_modules/cards_module'));

module.exports = function(router) {
  router.get('/lists/:list_id', function(req, res, next) {
    var lists = Cards.getByListId(+req.params.list_id);
    res.json(lists);
  });

  router.post('/lists', function(req, res, next) {
    var data = req.body;
    var list = Lists.addList(data);
    res.json(list);
  });

  router.post('/lists/:list_id/card_order', function(req, res) {
    var body = req.body;
    var data = body['card[]'];
    var list_id = +req.params.list_id;
    var card;
    var ids;

    if (typeof data === 'object') {
      ids = data.map(function(order) { return +order; });
    } else if (typeof data === 'undefined') {
      ids = [];
    } else if (typeof data === 'string') {
      ids = [+data];
    }
    var cards = Cards.getData();

    ids.forEach(function(id) {
      card = _.findWhere(cards, {id: id});
      card.sort_order = ids.indexOf(id);
      card.list_id = list_id;
    });

    Cards.set({
      "data": cards
    });
    res.status(200).end();
  });

  router.delete('/lists/:list_id', function(req, res, next) {
    var listId = +req.params.list_id;
    Lists.remove(listId);
    res.status(200).end();
  });

  router.put("/lists/:list_id", function(req, res) {
    var listId = +req.params.list_id;
    var data = req.body;
    delete data.Cards;
    var newList = Lists.update(listId, data);
    res.json(newList);
  });
};
