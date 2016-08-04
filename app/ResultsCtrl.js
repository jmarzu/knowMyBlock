app.controller('ResultsCtrl', ['$scope', '$http', function($scope, $http) {
  console.log('in the results controller');
  $http.get('https://data.seattle.gov/resource/y7pv-r3kh.json?', {
    params: {
      offense_type: 'ROBBERY-BUSINESS-GUN'
      // summarized_offense_description: 'ASSAULT'
    }
  })
  .then(function success(res) {
    console.log(res.data);
    $scope.datas = res.data;
  }, function error(res) {
    console.log(res.data);
  })

}]);