var express = require('express');
var router = express.Router();
var path = require('path');
var _ = require('underscore');
var Boards = require(path.resolve(path.dirname(__dirname), 'local_modules/boards_module'));

module.exports = function(router) {
  router.get('/', function(req, res, next) {
    var boards = Boards.get();
    var starred = _.where(boards, {starred: true});

    res.render('boards', {
      title: "Boards | Trello",
      boards: boards,
      starred: starred
    });
  });

  router.put('/boards/:board_id', function(req, res) {
    var boardId = +req.params.board_id;
    var data = req.body;
    data.starred = data.starred === true;
  
    if (data.starred) {
      data.starredOrder = Boards.getCurrentStarredOrder() + 1
    } else {
      delete data.starredOrder;
    }

    delete data.Lists;
    var newBoard = Boards.update(boardId, data);
    res.json(newBoard)
  })
};
