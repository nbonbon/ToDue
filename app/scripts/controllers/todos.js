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
.controller('TodoController', function ($scope, $http, dataURL) {
    $scope.data = {};

    $http.get(dataURL)
    .success(function (data) {
        $scope.data.todos = data;
    })
    .error(function (error) {
        $scope.data.error = error;
    });
});