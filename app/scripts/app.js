'use strict';

angular
  .module('toDueApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'ui.router',
    'ui.bootstrap',
    'firebase',
    'ngMessages'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainController',
        resolve: {
          // controller will not be loaded until $requireAuth resolves
          'currentAuth': ['AuthService', function(AuthService) {
            // $requireAuth returns a promise so the resolve waits for it to complete
            // If the promise is rejected, it will throw a $stateChangeError (see above)
            return AuthService.requireAuth();
          }]
        }
      })
      .state('account', {
        url: '/account',
        templateUrl: 'views/account.html',
        controller: 'SessionController',
        resolve: {
          // controller will not be loaded until $requireAuth resolves
          'currentAuth': ['AuthService', function(AuthService) {
            // $requireAuth returns a promise so the resolve waits for it to complete
            // If the promise is rejected, it will throw a $stateChangeError (see above)
            return AuthService.requireAuth();
          }]
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'AboutController'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'SessionController'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'SessionController'
      });

      $urlRouterProvider.otherwise('/');
  }])
  .run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('$stateChangeError', function(event, next, previous, error) {
      // Catch the error thrown when the $requireAuth promise is rejected
      // and redirect the user back to the login page
      if (error === 'AUTH_REQUIRED') {
        $location.path('/login');
      }
    });
  }]);
