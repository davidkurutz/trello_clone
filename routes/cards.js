var express = require('express');
var router = express.Router();
var path = require('path');
var Cards = require(path.resolve(path.dirname(__dirname), 'local_modules/cards_module'));

module.exports = function(router) {
  router.get('/cards/:list_id', function(req, res, next) {
    var lists = Cards.getByListId(+req.params.list_id);
    res.json(lists);
  });

  router.delete('/cards/:cardId', function(req, res) {
    var cardId = +req.params.cardId;
    Cards.remove(cardId);
    res.status(200).end();
  })

  router.post('/cards', function(req, res) {
    var card = Cards.addCard(req.body)
    res.json(card)
  }),

  router.put('/cards/:card_id', function(req, res) {
    var cardId = +req.params.card_id;

    var data = req.body;

    var newCard = Cards.update(cardId, data);
    res.json(newCard);
  })
};
