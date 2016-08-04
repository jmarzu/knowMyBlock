var app = angular.module('knowMyBlock', []);
console.log('in the app');

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  console.log('in the controller');
  $http.get('https://data.seattle.gov/resource/y7pv-r3kh.json?', {
    params: {
      offense_type: 'ROBBERY-BUSINESS-GUN'
    }
  })
  .then(function success(res) {
    console.log(res);
  }, function error(res) {
    console.log(res);
  })
}]);



// api_token = fXeV8k4r4jweDFGyUNzCQJhVw