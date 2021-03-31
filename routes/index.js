const express = require("express");
const router = express.Router();

var Pizza = require("../models/pizzaModel");
var Burgers = require("../models/burgerModel");
var Wings = require("../models/wingsModel");
var Pasta = require("../models/pastaModel");
var Tacos = require("../models/tacoModel");
var Sides = require("../models/sidesModel");
// var count = ["Spaghetti", "Penne", "Linguine", "Angel Hair"];
// var sauce = ["Marinara", "Bolegnese", "Alfredo", "Vodka"];
// var newBlog = [{noodle:count, sauce: sauce}]; 

// 	Pasta.create(newBlog,function(err, newBlogs){
// 		if(err){
// 			console.log(err);
// 		}
// 		else{		
// 			console.log(newBlogs)		}
// 	});


// Pizza page route
router.get("/pizza", function(req, res){	
	Pizza.find({}, function(err, allPizza){
		if(err){
			console.log("error");
		}
		else{
			res.send(allPizza);
		}
		} );
});

// Burger page route
router.get("/burgers", function(req, res){	
	Burgers.find({}, function(err, allBurgers){
		if(err){
			console.log("error");
		}
		else{
			console.log(allBurgers);
			res.send(allBurgers);
		}
		} );
});

// Wings page route
router.get("/wings", function(req, res){	
	Wings.find({}, function(err, allWings){
		if(err){
			console.log("error");
		}
		else{
			res.send(allWings);
		}
		} );
});

// Pasta page route
router.get("/pasta", function(req, res){	
	Pasta.find({}, function(err, allPasta){
		if(err){
			console.log("error");
		}
		else{
			res.send(allPasta);
		}
		} );
});







module.exports = router;