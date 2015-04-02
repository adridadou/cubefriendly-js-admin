'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:LoadCtrl
 * @description
 * # LoadCtrl
 * Controller of the adminApp
 */
angular.module('cubefriendlyAdmin')
  .controller('LoadCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
