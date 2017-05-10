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
      title: 'Boards | Trello',
      boards: boards,
      starred: starred
    });
  });

  router.post('/starred_board_order', function(req, res) {
    var body = req.body;
    var data = body['board[]'];
    var boards = Boards.getData();
    var board;
    var ids = data.map(function(order) {
      return +order;
    });

    ids.forEach(function(id) {
      board = _.findWhere(boards, {id: id});
      board.sort_order = ids.indexOf(id);
    });

    Boards.set({
      "data": boards
    });

    res.status(200).end();
  });
};
