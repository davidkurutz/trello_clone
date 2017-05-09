var express = require('express');
var router = express.Router();
var path = require('path');
var _ = require('underscore');
var Boards = require(path.resolve(path.dirname(__dirname), 'local_modules/boards_module'));
var Lists = require(path.resolve(path.dirname(__dirname), 'local_modules/lists_module'));

module.exports = function(router) {
  router.post('/boards', function(req, res) {
    var data = req.body;
    var board = Boards.addBoard(data);
    res.json(board);
  });

  router.post('/boards/:board_id/list_order', function(req, res) {
    var data = req.body;
    var list;
    var ids = data['list[]'].map(function(order) {
      return +order;
    });

    var lists = Lists.getByBoardId(+req.params.board_id);

    ids.forEach(function(id) {
      list = _.findWhere(lists, {id: id});
      list.sort_order = ids.indexOf(id);
    });

    Lists.set({
      "data": lists
    })
    res.status(200).end()
  });

  router.get('/boards/:board_id', function(req, res, next) {
    var lists = Lists.getByBoardId(+req.params.board_id);
    res.json(lists);
  });

  router.put('/boards/:board_id', function(req, res) {
    var boardId = +req.params.board_id;
    var data = req.body;
    data.starred = data.starred === true;
    delete data.Lists;
    var newBoard = Boards.update(boardId, data);
    res.json(newBoard);
  });
};
