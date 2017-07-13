//set up database connection
var mysql = require("mysql");



//provide user/password and db info
var connection;

console.log(" connecting: JSWDB" + process.env.JAWSDB_URL);

if(process.env.JAWSDB_URL) {
		console.log(" connecting: JSWDB" );

	connection=mysql.createConnection(process.env.JAWSDB_URL);
} else {
		console.log(" connecting: LOCAL" );



connection = mysql.createConnection({
	host: "localhost",
	PORT: 3306,
	user: "root",
	password: "password",
	database: "burger_db"
});
};
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