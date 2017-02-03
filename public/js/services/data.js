angular.module('dataService', [])
	.factory('data', ['$http',function($http) {
		return {
			getAreas : function() {
				return $http.get('/api/areas');
			},
			getCompetitions : function(id) {
				return $http.get('/api/areas/' + id + '/competitions');
			},
			getMatches : function(id) {
				return $http.get('/api/competitions/' + id + '/matches');
			}
		}
	}]);
