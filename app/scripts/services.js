var dataServices = angular.module('dataServices', ['ngResource']);

dataServices.factory('data', ['$resource', 
	function($resource){
		return $resource('data/nfl_qbs.json', {},{
			players: {method: 'GET', params: {}, isArray: true}
		});
	}
])