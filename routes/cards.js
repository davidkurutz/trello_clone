var express = require('express');
var router = express.Router();
var path = require('path');
var Cards = require(path.resolve(path.dirname(__dirname), 'local_modules/cards_module'));

module.exports = function(router) {
  router.get('/cards/:list_id', function(req, res, next) {
    var lists = Cards.getByListId(+req.params.list_id);
    res.json(lists);
  });

  router.delete('/cards/:cardId', function(req, res, next) {
    var cardId = +req.params.cardId;
    Cards.remove(cardId);
    res.status(200).end();
  })

  router.post('/cards', function(req, res, next) {
    var card = req.body
    Cards.addCard(card)
    res.json(card)
  })
};
