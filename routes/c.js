var express = require('express');
var router = express.Router();
var path = require('path');
var _ = require('underscore');
var Cards = require(path.resolve(path.dirname(__dirname), 'local_modules/cards_module'));
var Lists = require(path.resolve(path.dirname(__dirname), 'local_modules/lists_module'));
var Boards = require(path.resolve(path.dirname(__dirname), 'local_modules/boards_module'));

module.exports = function(router) {
  router.get('/c/:cardId*?', function(req, res) {
    var cardId = +req.params.cardId;
    var card = Cards.get(cardId);
    var listId = card.list_id;
    var list = Lists.get(listId);
    var boardId = +list.board_id;
    var board = Boards.get(boardId);

    res.render('card', {
      title: 'Boards | Trello',
      boards: Boards.get(),
      board_id: boardId,
      lists: Lists.getByBoardId(boardId),
      card: card,
      cardId: cardId
    });
  });
};
