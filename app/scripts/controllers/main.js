'use strict';

/**
 * @ngdoc function
 * @name toDueApp.controller:MainController
 * @description
 * # MainController
 * Controller of the toDueApp
 */
angular.module('toDueApp')
  .controller('MainController', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    $scope.addTodo = function()
    {
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };

    $scope.removeTodo = function(index)
    {
    	$scope.todos.splice(index, 1);
    };

    $scope.taskCompleted = function(index)
    {
        // $scope.todos.
    };
  });
