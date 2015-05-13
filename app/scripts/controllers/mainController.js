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
    
  }]);
