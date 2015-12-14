'use strict';

describe('Controller: InfoAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var InfoAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InfoAddCtrl = $controller('InfoAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InfoAddCtrl.awesomeThings.length).toBe(3);
  });
});
