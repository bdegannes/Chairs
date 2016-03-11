angular.module('app', ['ui.router', 'ngMaterial',
  'app.chairs'
])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('chairs', {
      url: '/',
      templateUrl: 'client/chairs_view.html',
      controller: 'chairsController'
    });
});
