var express = require('express');
var router = express.Router();
var path = require('path');
var _ = require('underscore');
var Boards = require(path.resolve(path.dirname(__dirname), 'local_modules/boards_module'));
var Lists = require(path.resolve(path.dirname(__dirname), 'local_modules/lists_module'));

module.exports = function(router) {
  router.get('/b/:boardId*?', function(req, res, next) {
    var boardId = +req.params.boardId;

    res.render('board', {
      title: 'Boards | Trello',
      boards: Boards.get(),
      board_id: boardId,
      lists: Lists.getByBoardId(boardId)
    });
  });
};