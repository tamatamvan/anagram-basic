'use strict';

var models = require('../models/index');
var anagram_dev = models.anagram_dev
var util = {};

util.anagrams = function(source, callback){
  // console.log(source);
  let result = []
  anagram_dev.findAll().then((data)=>{
    for(var i = 0 ; i < data.length ; i++){
      if(source.includes(data[i].dataValues.words)){
        result.push(data[i].dataValues.words)
      }
    }
    callback(source, result)
  })
}

module.exports = util;
