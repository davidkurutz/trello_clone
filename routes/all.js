var express = require('express');
var router = express.Router();
var path = require('path');
var routeFiles = ['root', 'b', 'c', 'boards','lists', 'cards'];

for (var i = 0; i < routeFiles.length; i++) {
  require(path.resolve(path.dirname(__dirname), 'routes/' + routeFiles[i]))(router);
}

module.exports = router;