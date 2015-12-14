'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:InfoAddCtrl
 * @description
 * # InfoAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('InfoAddCtrl', function (
    $scope,
    Info,
    $location
  ) {
    $scope.info = {};
    $scope.saveInfo = function() {
      Info.post($scope.info).then(function() {
        $location.path('/info');
      });
    };
  });
