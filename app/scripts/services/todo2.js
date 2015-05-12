angular.module("toDueApp")
.factory("todo2", ['$http', function($http){
	return $http.get('http://localhost:5500/todos')
		.success(function(data){
			return data;
		})
		.error(function(err){
			return err;
		});
}]);