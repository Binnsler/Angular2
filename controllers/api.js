var fireFly = require('../models/firefly.js');

var apiController = {

	get: function(req, res){
		// Want to be able to get either ALL animals or just ONE

		// All characters
		Character.find({}, function(err, characters){
			res.send(characters);
		});
	},

	create: function(req, res){

		req.body.componentCharacters = req.body.componentCharacters(', ');

		var character = new FireFly(req.body);

		character.save(function(err, doc){
			res.send(doc);
		});
	},

	delete: function(req, res){

		FireFly.remove({_id: req.params.id}, function(err, result){
			res.send(result);
		});

	}

}

module.exports = apiController;