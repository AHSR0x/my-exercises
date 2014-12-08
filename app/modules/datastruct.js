(function() {
	'use strict';
	angular.module('datastruct.factories', [])

		/**
		 * Traverse all stacks
		 *
		 * To find all cases will happen with current stacks
		 */
		.factory('traverseStacks', ['cloneObject', function(cloneObject) {
			var process = function(stacks) {
				if ( ! stacks[0]) {
					return;
				}

				/**
				 * @stacks      		: stacks stores neccessary infomation for traversing.
				 * @trackRoute  		: variable for tracking route's traversed.
				 * @bot(robot)   	: variable for tracking current route.
				 */
				var trackRoute 		= [];
				var bot 					= [];
				var stackCurrent 	= [];
				console.log(stacks);
				for (var i = 0; i < stacks.length; i++) {
					stackCurrent 					= cloneObject.cloneObject(stacks[i]);
					stacks[i] 						= null;
					stacks[i]['origin'] 	= cloneObject.cloneObject(stackCurrent);
					stacks[i]['current'] 	= cloneObject.cloneObject(stackCurrent);
				}
				stackCurrent = null;
				console.log(stacks);

				// Traverse stacks current. 
				while (stacks[0]) {
					for (var i = 0; i < stacks.length; i++) {

					}
					trackRoute.push(result)
				}
			}
			return {
				'process': process
			}
		}])

		.factory('cloneObject', [function() {
			var cloneObject = function(object) {
				return JSON.parse(JSON.stringify(object));
			}
			return {
				'cloneObject': cloneObject
			}
		}]);
})();