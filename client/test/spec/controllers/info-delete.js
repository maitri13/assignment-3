'use strict';

describe('Controller: InfoDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var InfoDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InfoDeleteCtrl = $controller('InfoDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InfoDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
