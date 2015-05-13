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
.factory('TaskService', ['$http', function($http, dataURL){
    var service = {};

    service.getTasks = function() {
    	var result = 
    	$http.get('http://localhost:5500/todos') // NEED TO FIX: Why won't it get datURL
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