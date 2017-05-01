var express = require('express');
var router = express.Router();
var path = require('path');
var Lists = require(path.resolve(path.dirname(__dirname), 'local_modules/lists_module'));

module.exports = function(router) {
  router.get('/lists/:board_id', function(req, res, next) {
    var lists = Lists.getByBoardId(+req.params.board_id);
    res.json(lists);
  });
};
