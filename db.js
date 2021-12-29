// Include Sequelize module
const Sequelize = require('sequelize')

// Creating new Object of Sequelize
const db = new Sequelize(
	'node29dec',
	'root',
	'', {

		// Explicitly specifying
		// mysql database
		dialect: 'mysql',

		// By default host is 'localhost'		
		host: 'localhost'
	}
);

// Exporting the sequelize object.
// We can use it in another file
// for creating models
module.exports = db;
