'use strict';
module.exports = function(sequelize, DataTypes) {
  var tbword = sequelize.define('tbword', {
    isiwords: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return tbword;
};