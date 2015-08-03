// Create a module // The dependencies come after the name. Dependencies = require('npm')
// ng-Resource, ng-Route
var fireFlyApp = angular.module('fireFlyApp', ['ngResource', 'ngRoute']);

// Provding the routes
fireFlyApp.config(function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: '/templates/fireFlyList',
			controller: 'fireFlyList'
		})

});



fireFlyApp.factory('characterFactory', function($resource){

	// References our data model
	// @_id is this._id
	var model = $resource('/api/characters/:id', {id: '@_id'})

	// Perform different types of requests depending on the route defined
	
	// GET
	// model.query()

	// POST
	// model.$save()

	// DELETE
	// model.$delete()

	return {
		model: model,
		characters: 
	}

});

// $scope gives us access to the views
fireFlyApp.controller('fireFlyList', function($scope){

	console.log('I am the walrus.')

});