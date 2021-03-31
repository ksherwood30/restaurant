var mongoose = require("mongoose");

var sidesModel = new mongoose.Schema({
  
   shell: [String],  
   meat: [String],
   toppings: [String]
	
	 
});



module.exports = mongoose.model("sidesModel", sidesModel);