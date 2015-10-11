'use strict';

angular.module('toDueApp')
.constant('todoDataURL', 'https://todue.firebaseio.com/todos')
.factory('TaskService', ['$firebaseArray', 'todoDataURL', function($firebaseArray, todoDataURL){
    var ref = new Firebase(todoDataURL);
    var taskArr = $firebaseArray(ref);
    
    return {
    	getTasks: function() {
    		return taskArr;
    	},

    	addTask: function(task) {
    		return taskArr.$add(task);
    	},

    	removeTask: function(task) {
    		return taskArr.$remove(task);
    	},

    	updateTask: function(task) {
    		return taskArr.$save(task);
    	}
    };
}]);