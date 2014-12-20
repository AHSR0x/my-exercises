(function() {
  'use strict';

  angular.module('exercise.controllers', [])
    .controller('exerciseDominoCtrl', ['traverseStacks', function(traverseStacks) {
      console.log(traverseStacks([
        [1,2,3], [4,5], [6,7,8,9]
      ]));
    }]);
})();