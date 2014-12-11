(function() {
  'use strict';

  describe('Unit: common.factories', function() {

    // Load modules require for depency injection.
    beforeEach(function() {
      module('common.factories');
    });

    describe('objectUtilities factory', function() {
      var array, arrayCloned, object, objectCloned, objectUtilitiesFactory;

      // Mock some factories for testing
      beforeEach(inject(function($injector) {
        objectUtilitiesFactory = $injector.get('objectUtilities');

        array = [
          '123', '456', '789', '6807'
        ];
        object = {
          'name'  : 'peter',
          'age'   : 18,
          'sex'   : 'male'
        };
      }));

      it('should equal stuff and stuff cloned', function() {

        // Cloned stuff
        var arrayCloned     = objectUtilitiesFactory.cloneObject(array);
        var objectCloned    = objectUtilitiesFactory.cloneObject(object);

        // Check cloned stuff
        expect(arrayCloned).toEqual(array);
        expect(objectCloned).toEqual(object);
      });

      it('should not equal stuff and stuff cloned', function() {

        // Cloned stuff
        var arrayCloned     = objectUtilitiesFactory.cloneObject(array);
        var objectCloned    = objectUtilitiesFactory.cloneObject(object);

        // Change property of cloned stuff for testing
        arrayCloned[0]      = '456';
        objectCloned.name   = 'david';

        // Check cloned stuff
        expect(arrayCloned).not.toEqual(array);
        expect(objectCloned).not.toEqual(object);
      });
    });
  });
})();