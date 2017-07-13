//import connection.js

var connection = require("./connection.js");

//create function for "?" print
function printQuestionMarks(num){
	var arr = [];
	for (var i = 0; i < num ; i++) {
		arr.push("?");
	}
	return arr.toString();
}

//create function to build query
function objToSql(ob) {
	var arr = [];
	for(var key in ob) {
		if(Object.hasOwnProperty.call(ob,key)){
		arr.push(key + "=" + ob[key]);
	    }
 	}
 	return arr.toString();
}

var orm = {

//Display all the burger
selectAll: function(tableName, cb) {
var query = "SELECT * FROM " + tableName + " ;";

connection.query(query, function(err, result){
if (err) throw err;
			// send the result back to the callback
			cb(result);
		});
},

//insert new burger on list
insertOne: function(tableName, column, value, cb) {
        var query = "INSERT INTO " + tableName;
		query += " (";
		query += column.toString();
		query += ") "
		query += "VALUES (";
		query += printQuestionMarks(value.length);
		query += ") ";

	console.log(query);

connection.query(query, value, function(err, result){
		if(err) {
			throw err;
		}

		cb(result);
	});

},

//update burger burger status
	updateOne: function(tableName,objColVals,condition,cb){
		var query = "UPDATE " + tableName;

		query += " SET ";
		query += objToSql(objColVals);
		query += " WHERE ";
		query += condition;

  connection.query(query, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
   });


},
 //delete burger from the list
	    delete: function(tableName,condition, cb){
		var query = "DELETE FROM " + tableName;
		query += " WHERE ";
		query += condition;

		console.log(query);
		connection.query(query, function(err,result){
 			if (err){
 				throw err;
 			}
 				cb(result);
 		
		});
	}
 }




//export to burger.js
module.exports = orm;