var mongoose = require("mongoose");

var pastaModel = new mongoose.Schema({
  
   noodle: [Object],  
   sauce: [String]	
	 
});



module.exports = mongoose.model("pastaModel", pastaModel);