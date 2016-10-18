'use strict';
module.exports = function(sequelize, DataTypes) {
  var word = sequelize.define('word', {
    word: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return word;
};