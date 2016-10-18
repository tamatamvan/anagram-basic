var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = []
  res.render('index', { title: 'Anagram Server', data });
});

module.exports = router;
