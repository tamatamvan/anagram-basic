'use strict';

var models = require('../models/index');
var util = {};
var Squelize = require('sequelize');
var word = models.word

util.anagrams = (source) => {
  word.findAll({
    where: Sequelize.where(Sequelize.fn('char_length', sequelize.col('word')), source.length)
  }).then((data, err) => {
      return data;
  });
}
