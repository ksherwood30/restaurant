var mongoose = require("mongoose");

var category = new mongoose.Schema({
   id: mongoose.Schema.Types.ObjectId,
   name: String
	 
});




module.exports = mongoose.model("CategoryName", category);