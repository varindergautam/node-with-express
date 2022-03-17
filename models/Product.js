const Sequelize = require('sequelize');
const db = require('../db');

module.exports = 
    db.define('products', {
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
        short_description:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        description:{
            type:Sequelize.TEXT,
            allowNull:false,
        },
        featured_image:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        quantity:{
            type:Sequelize.INTEGER,
            allowNull:false,
        },
        price:{
            type:Sequelize.DOUBLE,
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