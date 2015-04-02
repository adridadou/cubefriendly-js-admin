'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:CubefriendlyadminCtrl
 * @description
 * # CubefriendlyadminCtrl
 * Controller of the adminApp
 */
angular.module('cubefriendlyAdmin')
  .controller('CubefriendlyadminCtrl', function ($scope,$location) {
    $scope.isActive = function(path) {
      return $location.path().substr(0, path.length) === path;
    };
  });
