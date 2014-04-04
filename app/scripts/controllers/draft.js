'use strict';

var draftControllers = angular.module('draftControllers', []);

draftControllers.controller('DraftCtrl', ['$scope', 'data', 'draft', 'team', 
	function ($scope, data, draft, team) {
		$scope.message = "Welcome " + team.TeamName();
  		// $scope.players = data.players();
  	}]
);
