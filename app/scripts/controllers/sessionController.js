'use strict';

angular.module('toDueApp')
.controller('SessionController', ['$scope', '$rootScope', '$location', 'AuthService', function ($scope, $rootScope, $location, AuthService) {
    
    if(AuthService.getAuthState()) {
    	$location.path('/');
    }

	$scope.login = function() {
		AuthService.login($scope.user)
		.then(function(authData) {
			$scope.clearUserFields();
			$location.path('/');
		}, function(error) {
			if(error.code === 'NETWORK_ERROR')
			{
				$scope.error = "Error connecting to authentication server. Try Again.";
			} else {
				$scope.error = "Invalid username/password combination."
			}
		});
	};

	$scope.logout = function() {
		AuthService.logout();
		$location.path('/login');
	};

	$scope.createUser = function() {
		AuthService.registerUser($scope.user)
		.then(function(userData) {
			$scope.message = 'Registration Successful!';
			/* START TIMER FOR MESSAGE SHOWING */
			$rootScope.userData.id = userData.uid;
			$scope.clearUserFields();
		}, function(error) {
			$scope.error = error;
			console.log('Registration Failed!', error);
		});
	};

	$scope.removeUser = function() {
      AuthService.removeUser($scope.user)
      .then(function() {
        $scope.message = 'Account deleted.';
      }, function(error) {
        $scope.error = error;
        console.log('Account deletion Failed!', error);
      });
    };
    
    $scope.clearUserFields = function() {
		$scope.user.username = null;
		$scope.user.email = null;
		$scope.user.password = null;
		$scope.user.confPassword = null;
    };
 }]);