'use strict';

angular.module('toDueApp')
.constant('appDataURL', 'https://todue.firebaseio.com/')
.factory('AuthService', ['$firebaseAuth', '$rootScope', 'appDataURL', function($firebaseAuth, $rootScope, appDataURL){
    var ref = new Firebase(appDataURL);
    var authObj = $firebaseAuth(ref);

	authObj.$onAuth(function(authData) {
		if (authData) {
			$rootScope.loggedIn = true;
		 	console.log('Logged in as:', authData.uid);
		} else {
			$rootScope.loggedIn = false;
		 	console.log('Logged out');
		}
	});

    return {
    	login: function(user) {
    		return authObj.$authWithPassword({
				email: user.email,
				password: user.password
			});
    	},

    	logout: function() {
    		return authObj.$unauth();
    	},

    	registerUser: function(user) {
    		return authObj.$createUser({
				email: user.email,
				password: user.password
			});
    	},

    	removeUser: function(user) {
    		return authObj.$removeUser({
		        email: user.email,
		        password: user.password
		    });
    	},

    	getAuthState: function() {
    		var authData = authObj.$getAuth();

			if (authData) {
			 	console.log('Logged in as:', authData.uid);
			 	return true;
			} else {
			 	console.log('Logged out');
			 	return false;
			}
    	},

    	requireAuth: function() {
    		return authObj.$requireAuth();
    	}
    };
}]);