'use strict';

var models = require('../models/index');
var Sequelize = require('sequelize');
var util = {};
var word = models.Word
var arr = []

util.anagrams = function(source, callback){
  word.findAll({
    // where: Sequelize.where(Sequelize.fn('char_length', Sequelize.col('word')), source.length)
  }).then(function (data) {
    var temp = []
    var result = []
    for (var i = 0; i < data.length; i++) {
      temp.push(data[i].dataValues.word);
    }

    for (var i = 0; i < temp.length; i++) {
      var sorted = source.split('').sort()
      sorted = sorted.join()
      sorted = sorted.replace(/,/g, "")
      var tempo = temp[i].split('').sort()
      tempo = tempo.join()
      tempo = tempo.replace(/,/g, "")
      console.log(sorted);
      console.log(tempo);
    if(sorted.indexOf(tempo) !== -1) {
      result.push(temp[i])
      }
    }

    callback(source, result)
  })

}

module.exports = util;
