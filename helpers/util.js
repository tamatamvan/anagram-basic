'use strict';

var models = require('../models/index');
var word = models.Words;
var util = {};

util.anagrams = function(source, callback){
  console.log(source);
  // var hasil = []
  // word.findAll().then(function (data, err){
  //   if (err){
  //     return err
  //   } else {
  //     return data
  //   }
  // })
  var data = source.split('')
  callback(source, data)
}

module.exports = util;
