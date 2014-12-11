(function() {
  'use strict';

  describe("Unit: exercise.controllers", function() {
    var $scope, $controller, $rootScope, testFactory;

    // Load modules require for depency injection.
    beforeEach(function() {
      module('exercise.controllers');
      module('data-struct.factories');
    });

    // Mock test factory for testing
    /*beforeEach(inject(function($injector) {
      testFactory = $injector.get('test');
    }));*/

    // Register some variable for creating $controller, using $scope and so on
    beforeEach(inject(function(_$controller_, _$rootScope_) {
      $rootScope    = _$rootScope_;
      $controller   = _$controller_;
      $scope        = $rootScope.$new();
    }));

    it('abc', function() {
      /*// Call exerciseDominoCtrl and inject $scope
      var controller = $controller('exerciseDominoCtrl', {
        test: testFactory
      });
      expect('123').toEqual('123');*/
    });
  });
})();