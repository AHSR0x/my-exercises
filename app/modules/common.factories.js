(function() {
  'use strict';
  angular.module('common.factories', [])

    /**
     * Object utilities
     *
     * Useful object's function for handling object 
     *
     */
    .factory('objectUtilities', [function() {

      /**
       * Clone Object
       *
       * @param  {array|object} will be clone
       * @return {array|object} cloned
       */
      var cloneObject = function(object) {
        return JSON.parse(JSON.stringify(object));
      }

      /**
       * Check array empty
       *
       * @param  {array} 
       * @return {boolean} array is empty --> true, array not empty --> false
       */
      var isArrayEmpty = function(array) {
        if ( ! array || array.length <= 0) {
          return true;
        } else {
          return false;
        }
      }
      return {
        'cloneObject': cloneObject,
        'isArrayEmpty': isArrayEmpty
      }
    }]);
})();