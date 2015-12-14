'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/Info', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl',
        controllerAs: 'Info'
      })
      .when('/create/info', {
        templateUrl: 'views/info-add.html',
        controller: 'InfoAddCtrl',
        controllerAs: 'infoAdd'
      })
      .when('/info/:id', {
        templateUrl: 'views/info-view.html',
        controller: 'InfoViewCtrl',
        controllerAs: 'infoView'
      })
      .when('/info/:id/delete', {
        templateUrl: 'views/info-delete.html',
        controller: 'InfoDeleteCtrl',
        controllerAs: 'infoDelete'
      })
      .when('/info/:id/edit', {
        templateUrl: 'views/info-edit.html',
        controller: 'InfoEditCtrl',
        controllerAs: 'infoEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('InfoRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Info', function(InfoRestangular) {
    return InfoRestangular.service('Info');
  });
