'use strict';

var models = require('../models/index');
var util = {};

let fs = require('fs')
let data_file = fs.readFileSync('./db/fixtures/words', 'utf8').split("\n")

util.anagrams = function(source, callback){
  // console.log(source);
  let result = []
  for(var i = 0 ; i < data_file.length ; i++){
    if(data_file[i] === source){
      result.push(data_file[i])
    }
  }
  // console.log(data_file[2]);
  callback(source, result)
}

module.exports = util;
