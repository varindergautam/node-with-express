'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'users',
        'password',
         Sequelize.STRING
       ),
      queryInterface.addColumn(
        'users',
        'user_type',
        Sequelize.INTEGER
      )
    ]);
  },

  down: function (queryInterface, Sequelize) {
    // logic for reverting the changes
  }
};
