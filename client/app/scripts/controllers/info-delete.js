'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:InfoDeleteCtrl
 * @description
 * # InfoDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('InfoDeleteCtrl', function (
    $scope,
    $routeParams,
    Info,
    $location
  ) {
    $scope.info = Info.one($routeParams.id).get().$object;
    $scope.deleteInfo = function() {
      $scope.info.remove().then(function() {
        $location.path('/info');
      });
    };
    $scope.back = function() {
      $location.path('/info/' + $routeParams.id);
    };
  });
