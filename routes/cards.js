var express = require('express');
var router = express.Router();
var path = require('path');
var Cards = require(path.resolve(path.dirname(__dirname), 'local_modules/cards_module'));
var Comments = require(path.resolve(path.dirname(__dirname), 'local_modules/comments_module'));

module.exports = function(router) {
  router.delete('/cards/:cardId', function(req, res) {
    var cardId = +req.params.cardId;
    Cards.remove(cardId);
    res.status(200).end();
  })

  router.delete('/cards/:card_id/comments/:comment_id', function(req, res) {
    var commentId = +req.params.comment_id;
    var cardId = +req.params.card_id;
    Cards.removeComment(cardId, commentId);
    res.status(200).end();
  })

  router.post('/cards', function(req, res) {
    var card = Cards.addCard(req.body)
    res.json(card)
  }),

  router.post('/cards/:card_id/comments', function(req, res) {
    var body = req.body
    var comment = Cards.addComment(body);
    res.json(comment)
  }),

  router.put('/cards/:card_id/comments/:comment_id', function(req, res) {
    var body = req.body
    var cardId = +req.params.card_id;
    var commentId = +req.params.comment_id;
    var comment = Cards.updateComment(cardId, commentId, body);
    res.json(comment)
  }),

  router.put('/cards/:card_id', function(req, res) {
    var cardId = +req.params.card_id;
    var data = req.body;
    var newCard = Cards.update(cardId, data);
    res.json(newCard);
  })

};
