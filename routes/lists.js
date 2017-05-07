var express = require('express');
var router = express.Router();
var path = require('path');
var Lists = require(path.resolve(path.dirname(__dirname), 'local_modules/lists_module'));

module.exports = function(router) {
  router.post('/lists', function(req, res, next) {
    var data = req.body;
    var list = Lists.addList(data);
    res.json(list);
  });

  router.delete('/lists/:list_id', function(req, res, next) {
    var listId = +req.params.list_id;
    Lists.remove(listId);
    res.status(200).end();
  });

  router.put("/lists/:list_id", function(req, res) {
    var listId = +req.params.list_id;
    var data = req.body;
    delete data.Cards;
    var newList = Lists.update(listId, data);
    res.json(newList);
  });
};
