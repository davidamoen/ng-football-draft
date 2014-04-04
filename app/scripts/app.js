'use strict';

angular
  .module('footballDraftApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'mainControllers',
    'draftControllers',
    'draftServices',
    'dataServices',
    'teamServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/draft', {
        templateUrl: 'views/draft.html',
        controller: 'DraftCtrl'
      })    
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
  });
