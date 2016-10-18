'use strict';

var models = require('../models/index');
var util = {};
var word = models.Word
var arr = []

util.anagrams = function(source, callback){
  word.findAll({
    attributes:['word']
  }).then(function (data) {
    console.log(`success read`);
    var result = []
    for (var i = 0; i < data.length; i++) {
      if (source.includes(data[i].dataValues.word)) {
        result.push(data[i].dataValues.word)
      }
    }
    callback(source, result)
  })

}

module.exports = util;
