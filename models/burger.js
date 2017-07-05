//import orm
var orm = require("../config/orm.js");

//call ORM function


var burger = {
	// selectAll for getting all the burgers
	selectAll: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},
	

	// insertOne for adding a new burger
	insertOne: function(tableName, column, value, cb) {
		orm.insertOne('burgers', column, value, function(res) {
			cb(res);
		});
	},

	// updateOne for changing the burger status
	updateOne: function(devoured, burger_name, cb) {
		orm.updateOne(devoured, burger_name, function(res) {
			cb(res);
		});
	}
};

//export to burgers_controller.js
module.exports = burger;
