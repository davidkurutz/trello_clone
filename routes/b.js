var express = require('express');
var router = express.Router();
var path = require('path');
var _ = require('underscore');
var Boards = require(path.resolve(path.dirname(__dirname), 'local_modules/boards_module'));
var Lists = require(path.resolve(path.dirname(__dirname), 'local_modules/lists_module'));

module.exports = function(router) {
  router.get('/b/:board_id*?', function(req, res, next) {
    var board_id = +req.params.board_id;

    res.render('board', {
      title: "Boards | Trello",
      boards: Boards.get(),
      board_id: board_id,
      lists: Lists.getByBoardId(board_id)
    });
  });
};