'use strict';

var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('MainCtrl', ['$scope', '$rootScope', 'data', 'draft','$location', 'team',
	function ($scope, $rootScope, data, draft, $location, team) {

		$scope.draftStarted = draft.IsStarted();

		if ($scope.draftStarted) {
			$scope.message = 'The Draft has begun!  Please enter your team name and click Start';
		}
		else {
			$scope.message = 'Please be patient while we get the draft started...'
		}
  		
		$scope.Add = function(teamName) {
			team.SetTeamName(teamName);
			$location.path('/draft');
		}
  	}]
);
