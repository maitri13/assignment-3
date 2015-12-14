'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:InfoViewCtrl
 * @description
 * # InfoViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('InfoViewCtrl', function (
    $scope,
    $routeParams,
    Info
  ) {
    $scope.viewInfo = true;
    $scope.info = Info.one($routeParams.id).get().$object;
  });
