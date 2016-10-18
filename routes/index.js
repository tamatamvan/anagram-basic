var express = require('express');
var router = express.Router();
var helper = require('../helpers/util');

/* GET home page. */

router.get('/', function(req, res, next) {
  // console.log(req.body.anagram);
  // console.log(JSON.stringify(req.body));

  res.render('index', {title: 'Anagrams'});
});

router.post('/', function(req, res, next) {
  // console.log(req.body.anagram);
  // console.log(JSON.stringify(req.body));

  res.redirect(`${req.body.anagram}`)
});

router.get('/:word', function(req, res, next) {
  var word = req.params.word;
  helper.anagrams(word, function(source, data){
    res.render('index', { title: 'Anagrams', word: source, anagrams: data });
  });
});

module.exports = router;
