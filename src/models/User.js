const Sequelize = require('sequelize');
const db = require('../../db');

module.exports = 
    db.define('users', {
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
        password:{
            type:Sequelize.INTEGER,
            allowNull:false,
            unique:false,
        }
    });