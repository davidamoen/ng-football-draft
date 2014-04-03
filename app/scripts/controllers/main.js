'use strict';

var draftControllers = angular.module('draftControllers', []);

draftControllers.controller('MainCtrl', ['$scope', 'data', 'draft',
	function ($scope, data, draft) {

		$scope.draftStarted = draft.IsStarted();

		if ($scope.draftStarted) {
			$scope.message = 'The Draft has begun!  Please enter your team name and click Start';
		}
		else {
			$scope.message = 'Please be patient while we get the draft started...'
		}
  		
		$scope.Add = draft.AddTeam;

  		// $scope.players = data.players();
  	}]
);
