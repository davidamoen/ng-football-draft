var dataServices = angular.module('dataServices', ['ngResource']);

dataServices.factory('data', ['$resource', 
	function($resource){
		return $resource('data/nfl_qbs.json', {},{
			players: {method: 'GET', params: {}, isArray: true}
		});
	}
]);

var draftServices = angular.module('draftServices',[]);
draftServices.factory('draft', function(){
	function isStarted() {
		return true;
	}

	function addTeam (teamName) {
		console.log(teamName);
	}

	return {
		IsStarted: isStarted,
		AddTeam: addTeam
	}
});