var express = require('express');
var router = express.Router();
var path = require('path');
var Boards = require(path.resolve(path.dirname(__dirname), 'local_modules/boards_module'));
var Lists = require(path.resolve(path.dirname(__dirname), 'local_modules/lists_module'))

module.exports = function(router) {
  router.get('/b/:id*', function(req, res, next) {
    res.render('board', {
      title: "Boards | Trello",
      boards: Boards.get(),
      board_id: +req.params.id,
      lists: Lists.getByBoardId(+req.params.id)
    });
  });
};