'use strict';

angular
  .module('footballDraftApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'draftControllers',
    'dataServices'    
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
