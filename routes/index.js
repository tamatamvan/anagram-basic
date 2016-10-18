var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let kata = req.body.anagram
  console.log(kata);
  res.render('index', { title: 'Anagram-basic' });
});

module.exports = router;
