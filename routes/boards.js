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
};
