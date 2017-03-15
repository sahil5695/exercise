var mongoose = require('mongoose');

var AddressSchema = new mongoose.Schema({
	hno: String,
	city: String,
	state: String,
	country: String
});

mongoose.model('Address', AddressSchema);