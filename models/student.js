var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
	name: String,
	age: Number,
	address: []
})	

mongoose.model('Student', StudentSchema);