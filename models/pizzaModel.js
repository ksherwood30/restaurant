var mongoose = require("mongoose");

var pizzaModel = new mongoose.Schema({
  
   size: [
      Object
   ],  
   crust: [String],
   toppings: [String]
	
	 
});



module.exports = mongoose.model("pizzaModel", pizzaModel);