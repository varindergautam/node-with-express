'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    await queryInterface.createTable('users', { 
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
      email:{
          type:Sequelize.STRING,
          allowNull:false,
          unique:true,
      },
      phone_number:{
          type:Sequelize.STRING,
          allowNull:false,
          unique:true,
      },
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE
     });
     
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
     await queryInterface.dropTable('users');
     
  }
};
