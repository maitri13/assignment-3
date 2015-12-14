'use strict';

describe('Controller: InfoViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var InfoViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InfoViewCtrl = $controller('InfoViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InfoViewCtrl.awesomeThings.length).toBe(3);
  });
});
