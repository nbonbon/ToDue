'use strict';

angular.module('toDueApp')
.controller('MainController', ['$scope', 'TaskService', function ($scope, TaskService) {
    $scope.data = {};

    $scope.data.tasks = TaskService.getTasks();
    
    $scope.addTask = function (task) {
        task.status = true;

        TaskService.addTask(task)
        .then(function() {
            task.title = '';
            task = undefined;
        }, function(error) {
            console.log('addTask Failed!', error);
            $scope.error = error;
        });
    };

    $scope.removeTask = function (task) {
        TaskService.removeTask(task)
        .then(function() {
            $scope.message = 'Task Removed!';
        }, function(error) {
            console.log('removeTask Failed!', error);
            $scope.error = error;
        });
    };

    $scope.updateTask = function(task) {
        TaskService.updateTask(task)
        .then(function() {
            $scope.message = 'Task Updated!';
        }, function(error) {
            console.log('updateTask Failed!', error);
            $scope.error = error;
        });
    };

    $scope.toggleStatus = function(task) {
        task.status = !task.status;
        $scope.updateTask(task);
    };
    
  }]);
