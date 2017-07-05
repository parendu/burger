//set up database connection
var mysql = require("mysql");

//provide user/password and db info
var connection = mysql.createConnection({
	host: "localhost",
	PORT: 3000,
	user: "root",

	password: "password",
	database: "burger_db"
});

//connection database
connection.connect(function(err){
	if (err) {
		console.error('error conencting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

//export to orm.js
module.exports = connection;