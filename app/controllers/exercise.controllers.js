(function() {
	'use strict';

	angular.module('exercise.controllers', [])
		.controller('exerciseDominoCtrl', ['traverseStacks', function(traverseStacks) {
			var a = [
				[0], [123, 1234], [566, 978, 100], [56, 67]
			];
			console.log(JSON.stringify(traverseStacks(a)));
			
		}])
})();