//import express and burger
var express = require("express");
var burger = require("../models/burger.js");


var router = express.Router();

//root route

router.get('/', function(req, res) {
	res.redirect('/index');
});



// 
router.get("/index", function(req, res){
 burger.selectAll(function(data){

 	var hbsObject = {burgers: data};
 	res.render('index', hbsObject);
 });

});

//route to index file and get data using selectALL
router.get('/index', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {burgers: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

//post call route to /burgers/insertOne, insert datat in db
router.post('/burgers/insertOne', function(req, res) {
	burger.insertOne(['burger_name', 'devoured'], [req.body.name, false], function() {
		res.redirect('/index');
	});
});

//update data using updateOne 
router.put('/burgers/updateOne/:burger_name', function(req, res) {
	

	burger.updateOne({devoured: req.body.devoured}, req.params.burger_name, function() {
		res.redirect('/index');
	});
});

module.exports = router;