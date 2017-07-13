//import express and burger
var express = require("express");
var burger = require("../models/burger.js");


var router = express.Router();

//add router.get "/" to redirect to /index

router.get('/', function(req, res) {
	res.redirect('/burger');
});




//route to index file and get data using selectALL
router.get('/burger', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {burgers: data};
		console.log(hbsObject);
		res.render('index.handlebars', hbsObject);
	});
});

//post call route to /burgers/insertOne, insert datat in db
router.post('/burger/insertOne', function(req, res) {
	burger.insertOne(req.body.burger_name, function(result) {
		console.log(result)
		res.redirect('/');
	});
});

//update data using updateOne 

	
router.put('/burger/updateOne/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);

	burger.updateOne({devoured: req.body.devoured}, condition, function() {
		res.redirect('/');
	});
});







//delete route
router.delete("/:id",function(req,res) {
 	var condition = req.params.id;
 	burger.delete(condition,function() {
 		res.redirect("/");
 	});

 });


module.exports = router;