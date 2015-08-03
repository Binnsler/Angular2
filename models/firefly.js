var mongoose = require('mongoose');

var fireFlySchema = mongoose.Schema({

	name: {type: String},
	hometown: {type: String},
	weapon: {type: String, default: 'Pistol'},
	specialties: [{type: String}]

});

var FireFly = mongoose.model('FireFly', cryptAnimalSchema);

module.exports = FireFly;