var mongoose = require("mongoose");

var burgerModel = new mongoose.Schema({
  
   patties: [
      Object
   ],  
   condiments: [String],  
   toppings: [String]	
	 
});



module.exports = mongoose.model("burgerModel", burgerModel);