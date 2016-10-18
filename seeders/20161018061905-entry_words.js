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
    let data = fs.readFileSync('db/fixtures/words', 'utf8').split('\n')

    let temp = []
    for (let i = 0; i <data.length; i++){
      let kata = {
        kata: data[i],
        updatedAt : new Date(),
        createdAt : new Date()
      }
      temp.push(kata)
    }

    return queryInterface.bulkInsert('Words', temp)
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Words', null, {});

  }
};
