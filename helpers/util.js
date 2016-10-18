'use strict';

var models = require('../models');
var words = models.Words
var util = {};

util.anagrams = function(source, callback){

  var temp = []

  // console.log(temp);
  words.findAll().then(function (data) {
    for(var i = 0;i<data.length; i++) {
    if (source.includes(data[i].words)) {
        console.log(data[i].words);
        temp.push(data[i].words)
      }
    }
    callback(source, temp)
  })

}

module.exports = util;
