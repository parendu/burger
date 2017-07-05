//import connection.js

var connection = require("./connection.js");




var orm = {

//Display all the burger
function selectAll(tableName, cb) {
var query = "SELECT * FROM " + tableName + " ;";

connection.query(query, function(err, result){
if (err) throw err;
			// send the result back to the callback
			cb(result);
		});
},

//insert new burger on list
function insertOne(tableName, column, value, cb) {
	var query = "INSERT INTO "+ tableName;
	var columnName = column.toString();
	var query += "("+ columnName +") Values";
	var query += "(?);";

	console.log(query);

connection.query(query, value, function(err, result){
		if(err) {
			throw err;
		}

		cb(result);
	});

},

//update burger
function updateOne(devoured, burger_name, cb) {
  var query = "UPDATE burgers SET devoured = ? WHERE burger_name = ?"

  connection.query(query, [devoured, burger_name], function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
   });
};


};

//export to burger.js
module.exports = orm;