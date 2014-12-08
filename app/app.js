(function() {
  'use strict';

  // Include all requirement files
  require('../bower_components/angular/angular.min.js');
  require('../bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js');
  require('../bower_components/angular-ui-router/release/angular-ui-router.min.js');
  require('./controllers/exercise.controllers.js');
  require('./modules/datastruct.js');

  // Inject all depencies
  angular.
    module('myApp', [
      'ui.router',
      'ui.bootstrap',
      'exercise.controllers',
      'datastruct.factories'
    ])
    .config(function($stateProvider) {

      // Inject stateProvider from depency ui-router for routing multi-views + nested-views
      $stateProvider

        // Define app state
        .state('app', {
          url           : '/app',
          templateUrl   : 'app/views/app/app.html'
        })

        // Define Exercise state
        .state('app.exercise', {
          url           : '/exercise',
          templateUrl   : 'app/views/exercise/exercise.html'
        })
        .state('app.exercise.domino', {
          url           : '/domino',
          templateUrl   : 'app/views/exercise/exercise.domino.html',
          controller    : 'exerciseDominoCtrl'
        });
    });
})();