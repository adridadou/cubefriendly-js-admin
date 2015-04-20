'use strict';

/**
 * @ngdoc overview
 * @name adminApp
 * @description
 * # adminApp
 *
 * Main module of the application.
 */
angular
  .module('cubefriendlyAdmin', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgo-angular-wizard',
    'checklist-model'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/load', {
        templateUrl: 'views/load.html',
        controller: 'LoadCtrl'
      })
      .when('/process/csv/:filename',{
        templateUrl: 'views/processcsv.html',
        controller: 'ProcesscsvCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
