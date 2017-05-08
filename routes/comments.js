var express = require('express');
var router = express.Router();
var path = require('path');
var Comments = require(path.resolve(path.dirname(__dirname), 'local_modules/comments_module'));

module.exports = function(router) {
  router.delete('/comments/:comment_id', function(req, res) {
    var commentId = +req.params.comment_id;
    Comments.remove(commentId);
    res.status(200).end();
  })

  router.post('/comments', function(req, res) {
    var comment = Comments.addComment(req.body)
    res.json(comment)
  }),

  router.put('/comments/:comment_id', function(req, res) {
    var commentId = +req.params.comment_id;
    var data = req.body;
    var newComment = Comments.update(commentId, data);
    res.json(newComment);
  })
};
