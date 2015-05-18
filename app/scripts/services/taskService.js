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
        }).error(function (error) {
            return (error.message || 'an error occurred');
        });

        return result;
    };

    service.addTask = function(titleParam) {
        var result = 
        $http.post(dataURL, {
            title: titleParam,
            status: true
        }).success(function(response) {
            return response;
        }).error(function(error) {
            return (error.message || 'an error occurred');
        });

        return result;
    };

    service.removeTask = function(taskID) {
        var result = 
        $http.delete(dataURL + '/' + taskID)
        .success(function() {
            return;
        }).error(function(error) {
            return (error.message || 'an error occurred');
        });

        return result;
    };

    return service;
}]);