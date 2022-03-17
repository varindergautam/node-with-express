const Sequelize = require('sequelize');
const db = require('../db');

module.exports = 
    db.define('categories', {
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
            unique:false,
        },
        user_id:{
            type:Sequelize.INTEGER,
            allowNull:true,
            unique:false,
        }
    });