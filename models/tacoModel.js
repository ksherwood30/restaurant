var mongoose = require("mongoose");

var tacoModel = new mongoose.Schema({
  
   shell: [String],  
   meat: [String],
   toppings: [String]
	
	 
});



module.exports = mongoose.model("tacoModel", tacoModel);