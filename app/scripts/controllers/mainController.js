'use strict';

/**
 * @ngdoc function
 * @name toDueApp.controller:MainController
 * @description
 * # MainController
 * Controller of the toDueApp
 */
angular.module('toDueApp')
  .controller('MainController', ['$scope', 'TaskService', function ($scope, TaskService) {
    $scope.data = {};

    TaskService.getTasks().then(function(response){
        $scope.data.tasks = response.data;
        $scope.data.error = response.error;
    });

    $scope.addTask = function (task) {
        TaskService.addTask(task.title)
        .then(function(newTask){
            $scope.data.tasks.push(newTask.data);
        });

        task.title = "";
        task = undefined;
    };

    $scope.removeTask = function (taskID, index) {
         TaskService.removeTask(taskID)
        .then(function(){
            $scope.data.tasks.splice(index, 1);
        });
    };

    $scope.taskStatusUpdate = function(task) {
        //TODO: Create this
        TaskService.updateTaskStatus(taskID, !task.status)
        .then(function(){
            task.status = !task.status;
        });
    };
    
  }]);
