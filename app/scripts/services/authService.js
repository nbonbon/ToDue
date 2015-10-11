'use strict';

angular.module('toDueApp')
.constant('appDataURL', 'https://todue.firebaseio.com/')
.factory('AuthService', ['$firebaseAuth', 'appDataURL', function($firebaseAuth, appDataURL){
    var ref = new Firebase(appDataURL);
    var authObj = $firebaseAuth(ref);

    return {
    	authObj.$onAuth(onAuthStateChange(authData));

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

    	onAuthStateChange: function(authData) {
    		if(authData) {
    			$rootScope.loggedIn = true;
    		} else {
    			$rootScope.loggedIn = false;
    		}
    	}
    };
}]);