'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const fs = require('fs');
    var words = fs.readFileSync('./db/fixtures/words','utf-8').trim().split('\n')
    // console.log(words[10]);
    var tampung=[]
    for(var i=0;i<words.length;i++)
    {
      tampung.push({
        words: words[i],
        createdAt: new Date(),
        updatedAt: new Date()
      })

    }



      return queryInterface.bulkInsert('Words',tampung);


  },

  down: function (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('Words', null);
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
