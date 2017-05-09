var express = require('express');
var router = express.Router();
var path = require('path');
var Comments = require(path.resolve(path.dirname(__dirname), 'local_modules/comments_module'));
var Cards = require(path.resolve(path.dirname(__dirname), 'local_modules/cards_module'));

module.exports = function(router) {
  router.put('/comments/:comment_id', function(req, res) {
    var commentId = +req.params.comment_id;
    var data = req.body;
    var newComment = Comments.update(commentId, data);
    res.json(newComment);
  })
};
