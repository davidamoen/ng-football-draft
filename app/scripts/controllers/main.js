'use strict';

var draftControllers = angular.module('draftControllers', []);

draftControllers.controller('MainCtrl', ['$scope', 'data',
	function ($scope, data) {
  		$scope.message = 'Please be patient while we get the draft started...'
  		// $scope.players = data.players();
  	}]
);
