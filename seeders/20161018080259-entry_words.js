'use strict';
const fs = require('fs')
let words = fs.readFileSync('./db/fixtures/words', 'utf8').split('\n');
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
    let kamus = [];
    for (var i = 0; i < words.length; i++) {
      let kata = {
        word: words[i],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      kamus.push(kata);
    }
    return queryInterface.bulkInsert('words', kamus)

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('words',null)
  }
};
