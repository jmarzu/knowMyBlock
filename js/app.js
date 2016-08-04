var app = angular.module('knowMyBlock', ['ui.router', 'ui.bootstrap']);
console.log('in the app');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .state('results', {
    url: '/results',
    templateUrl: 'views/results.html',
    controller: 'ResultsCtrl'
  })
  .state('search', {
    url: '/searchCrimes',
    templateUrl: 'partials/modal.html',
    controller: 'SearchCrimesCtrl'
  });
}]);






// api_token = fXeV8k4r4jweDFGyUNzCQJhVw

// ASSAULT, NARCOTICS, ROBBERY, DUI