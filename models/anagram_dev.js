'use strict';
module.exports = function(sequelize, DataTypes) {
  var anagram_dev = sequelize.define('anagram_dev', {
    words: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return anagram_dev;
};