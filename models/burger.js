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
	insertOne: function(name, cb) {
		orm.insertOne('burgers', ["burger_name", "devoured"],[name, false], function(res) {
			cb(res);
		});
	},

	// updateOne for changing the burger status
	// updateOne: function(id, cb) {
	// 	var condition = " id = " + id;
	// 	orm.updateOne("burgers", {devoured : true}, condition, function(res) {
	// 		cb(res);
	// 	});

		updateOne: function(objColVals, condition, cb) {
		orm.updateOne('burgers', objColVals, condition, function(res) {
			cb(res);
		});
	
	
},

	delete: function(id,cb) {
		var condition = " id = "  + id;
		orm.delete("burgers",condition,function(res){
			cb(res);
		});
	}
};

//export to burgers_controller.js
module.exports = burger;
