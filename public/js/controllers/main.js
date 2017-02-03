angular.module('dataController', [])

	.controller('mainController', ['$scope','$http','data', function($scope, $http, data) {

    $scope.working = "Hi!!";

    data.getAreas()
			.success(function(data) {
				$scope.areas = data;
			});

		$scope.getCompetitions = function(id) {
        console.log("getting competitions");
				data.getCompetitions(id)
					.success(function(data) {
						$scope.competitions = data;
					});
		};

    $scope.getMatches = function(id) {
      console.log("Getting matches..");
      data.getMatches(id)
        .success(function(data) {
          $scope.matches = data;
        });
    };
  }]);
