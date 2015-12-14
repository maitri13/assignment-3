'use strict';
/**
 * @ngdoc function
 * @name clientApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the clientApp
 */
/*angular.module('clientApp')
  .controller('InfoCtrl', function($scope) {
    $scope.Info= [
      {
      Age: '40',
      ID: 'xyz'},
      {
        Age: '50',
        ID: 'Kuldeep'}
    ];
  });*/
angular.module('clientApp').controller('InfoCtrl', function (
    $scope,
    Info
  ) {
    $scope.info = Info.getList().$object;
  });
