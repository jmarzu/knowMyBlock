var app = angular.module('knowMyBlock', ['ui.router']);
console.log('in the app');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .state('about', {
    url: '/results',
    templateUrl: 'views/results.html',
    controller: 'ResultsCtrl'
  })
  .state('contact', {
    url: '/searchCrimes',
    templateUrl: 'views/searchCrimes.html',
    controller: 'SearchCrimesCtrl'
  });

}]);






// api_token = fXeV8k4r4jweDFGyUNzCQJhVw

// ASSAULT, NARCOTICS, ROBBERY, DUI