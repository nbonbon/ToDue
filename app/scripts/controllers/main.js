'use strict';

/**
 * @ngdoc function
 * @name toDueApp.controller:MainController
 * @description
 * # MainController
 * Controller of the toDueApp
 */
angular.module('toDueApp')
  .controller('MainController', ['$scope', 'todo2', function ($scope, todo2) {


   /* $scope.addTodo = function()
    {
    	$scope.data.todos.push($scope.todo);
    	$scope.todo = '';
    };

    $scope.removeTodo = function(index)
    {
    	$scope.data.todos.splice(index, 1);
    };

    $scope.taskCompleted = function(index)
    {
        // $scope.todos.
    };*/

    todo2.success(function(data){
        $scope.todos = data;
    });



    // function Todo(description)
    // {
    //     this.id = new Random();
    //     this.description = description;
    //     this.isActive = true;
    //     this.creationTime = new Date();

    //     completeTodo:function()
    //     {
    //         this.finishTime = new Date();
    //         this.isActive = false;
    //     };
    // };

    // function TodoList()
    // {
    //     this.list = new Array();

    //     addTodo:function(description)
    //     {
    //         // Create new todo item with the description and assign its status to false
    //         var newToDo = new ToDo(description);
    //         this.list.push(newToDo);
    //     };

    //     removeTodo:function()
    // };
  }]);
