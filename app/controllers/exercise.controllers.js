(function() {
	'use strict';
	angular.module('exercise.controllers', [])

		// Controller for exercise about data structure: domino.
		.controller('exerciseDominoCtrl', ['traverseStacks', function(traverseStacks) {
			traverseStacks.process([
				[5,6],
				[7,4]
			]);
		}]);
})();