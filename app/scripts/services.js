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

	//function addTeam () {
//		console.log($scope.teamName);
	//}

	return {
		IsStarted: isStarted
		//AddTeam: addTeam
	}
});

var teamServices = angular.module('teamServices', []);
teamServices.factory('team', function(){
	var _teamName = '';
	function getTeamName(){
		return _teamName;
	};
	function setTeamName(teamName) {
		_teamName = teamName;
	}

	return {
		TeamName: getTeamName,
		SetTeamName: setTeamName
	}
});