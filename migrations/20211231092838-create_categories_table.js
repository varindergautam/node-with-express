'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.createTable('categories', { 
      id: {
        type:Sequelize.INTEGER(11),
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
      },
      name:{
          type:Sequelize.STRING,
          allowNull:false,
      },
      status:{
        type:Sequelize.INTEGER,
        allowNull:false,
        defaultValue: 1,
        comment: '1 Active 0 Inactive'
    },
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE,
      deletedAt:Sequelize.DATE,
     });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
