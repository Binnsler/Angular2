var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var mongoose = require('mongoose');
var apiController = require('./controllers/api.js')

mongoose.connect('mongodb://localhost/angulardemo')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/templates/:templateName', indexController.templates)

app.get('/api/characters', apiController.get)
app.post('/api/characters', apiController.create)
app.delete('/api/characters', apiController.delete)

var server = app.listen(9482, function() {
	console.log('Express server listening on port ' + server.address().port);
});
