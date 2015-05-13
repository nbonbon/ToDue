'use strict';

/**
 * @ngdoc function
 * @name toDueApp.controller:TodoController
 * @description
 * # TodoController
 * Controller of the toDueApp
 */
angular.module('toDueApp')
.constant('dataURL', 'http://localhost:5500/todos')
.factory('TaskService', ['$http', 'dataURL', function($http, dataURL){
    var service = {};

    service.getTasks = function() {
    	var result = 
    	$http.get(dataURL)
        .success(function (data) {
            result.data = data;
            return result;
        });
        
        /*
        *  NEED TO FIX 
        .error(function (error) {
            result.error = error;
            return result;
        });
		*/

        return result;
    };

    return service;
}]);