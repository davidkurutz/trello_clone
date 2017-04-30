var express = require('express');
var router = express.Router();
var path = require('path');
var Boards = require(path.resolve(path.dirname(__dirname), 'local_modules/boards_module'));

module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('boards', {
      title: "Boards | Trello",
      boards: Boards.get()
    });
  });
};
