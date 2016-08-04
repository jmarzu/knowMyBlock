var app = angular.module('knowMyBlock', ['ui.router']);
console.log('in angular app');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('results', {
    url: '/',
    templateUrl: 'views/results.html',
    controller: 'ResultsCtrl'
  })
  .state('main', {
    url: '/main',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .state('search', {
    url: '/searchCrimes',
    templateUrl: 'partials/modal.html',
    controller: 'SearchCrimesCtrl'
  });
}]);


