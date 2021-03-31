var mongoose = require("mongoose");

var wingsModel = new mongoose.Schema({
  
   count: [Object],  
   sauce: [String]	
	 
});



module.exports = mongoose.model("wingsModel", wingsModel);