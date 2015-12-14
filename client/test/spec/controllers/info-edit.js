'use strict';

describe('Controller: InfoEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var InfoEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InfoEditCtrl = $controller('InfoEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InfoEditCtrl.awesomeThings.length).toBe(3);
  });
});
