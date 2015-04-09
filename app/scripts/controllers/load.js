'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:LoadCtrl
 * @description
 * # LoadCtrl
 * Controller of the adminApp
 */
angular.module('cubefriendlyAdmin')
  .service('LoadService', function(CubefriendlyConstants,$http){
    var service = {
      files: [],
      loadPendingFiles : function(){
        $http.get(CubefriendlyConstants.BACKEND + 'admin/load/pending').
          success(function(data) {
            service.files = data.map(function(file){return file.file;});
          }).error(function() {
            console.error('error while retrieving pending files!');
          });
      }
    };
    return service;
  })
  .controller('LoadCtrl', function ($scope,$location, CubefriendlyConstants, LoadService) {

    $scope.LoadService = LoadService;

    $scope.process = function(id) {
        console.log('processing ' + id);
        $location.url('process/csv/' + id);
    };

    $scope.$watch('LoadService.files', function(){
      $scope.files = LoadService.files;
    });

    LoadService.loadPendingFiles();

  }).directive('dropZone', function(CubefriendlyConstants,LoadService) {
    return function(scope, element) {
      element.dropzone({
          url: CubefriendlyConstants.BACKEND + 'admin/load',
          maxFilesize: 100,
          paramName: 'source',
          maxThumbnailFilesize: 5,
          init: function() {
            this.on('success',function(){
              LoadService.loadPendingFiles();
            });
          }
      });
    };
  });
