'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:InfoEditCtrl
 * @description
 * # InfoEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('InfoEditCtrl', function (
    $scope,
    $routeParams,
    Info,
    $location
  ) {
    $scope.editInfo = true;
    $scope.info = {};
    Info.one($routeParams.id).get().then(function(info) {
      $scope.info = info;
      $scope.saveInfo = function() {
        $scope.info.save().then(function() {
          $location.path('/info/' + $routeParams.id);
        });
      };
    });
  });
