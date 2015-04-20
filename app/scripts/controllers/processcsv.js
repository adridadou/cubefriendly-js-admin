'use strict';

/**
 * @ngdoc function
 * @name cubefriendlyAdmin.controller:ProcesscsvCtrl
 * @description
 * # ProcesscsvCtrl
 * Controller of the cubefriendlyAdmin
 */
angular.module('cubefriendlyAdmin')
  .controller('ProcesscsvCtrl', function ($scope,$routeParams,CsvService) {
    $scope.name = $routeParams.filename.replace('.csv','');
    $scope.dimensions = [];
    $scope.metrics = [];
    CsvService.loadDimensions($routeParams.filename).success(function(data){
      $scope.separator = data.separator;
      $scope.dimensions = data.dimensions;
    });
    $scope.process = function() {
      console.log('name:' + $scope.name);
      console.log('dimensions:' + $scope.dimensions);
      console.log('metrics:' + $scope.metrics);
    };
  }).factory('CsvService',function($http,CubefriendlyConstants){
    return {
      loadDimensions: function(filename) {
        return $http.get(CubefriendlyConstants.BACKEND + 'admin/source/header/' + filename);
      }
    };
  });
