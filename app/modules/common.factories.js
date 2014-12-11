(function() {
	'use strict';
	angular.module('common.factories', [])

		/**
		 * Clone Object
		 *
		 * @param  {array|object} will be clone
		 * @return {array|object} cloned
		 */
		.factory('objectUtilities', [function() {
			var cloneObject = function(object) {
				return JSON.parse(JSON.stringify(object));
			}
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