var dataServices = angular.module('dataServices', ['ngResource']);

dataServices.factory('data', ['$resource', 
	function($resource){
		return $resource('data/nfl_qbs.json', {},{
			players: {method: 'GET', params: {}, isArray: true}
		});
	}
]);

var draftServices = angular.module('draftServices', ['ngResource']);
dataServices.factory('draft', ['$http',
	function($http) {
		var draftStarted = function(callback) {
			$http.get('http://localhost:8080/isstarted').success(
				function(data, status, headers, config) {
					callback(data);
				}
			);
		}

		var currentTeams = function(callback) {
			$http.get('http://localhost:8080/teams').success(
				function(data, status, headers, config) {
					callback(data);
				}
			);
		}

		return {
			DraftStarted: draftStarted,
			Teams: currentTeams
		}

	}]
);

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